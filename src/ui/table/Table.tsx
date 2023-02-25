import React, { ReactElement, useCallback, useMemo } from "react";
import * as ReactBaseTableExtra from "react-base-table";
import BaseTable, { BaseTableProps } from "react-base-table";
import "react-base-table/styles.css";
import styled from "styled-components";
import { color, ColorProps, layout, LayoutProps } from "styled-system";
import { Box } from "../Box";
import { Checkbox } from "../Checkbox";
import { Flex } from "../Flex";
import { SimpleLoader } from "../Loader";
import { Tooltip } from "../Tooltip";
import { Typography } from "../Typography";
import { ColumnShape, ExtraProps, CellProps, RendererFormat } from "./types";
import "./style.scss";
import {
  Empty,
  LoadingLayer,
  LoadingMoreLayer,
  LoadingMoreText,
} from "./TableStyledElement";

export type TableProps = LayoutProps &
  Partial<BaseTableProps> &
  ColorProps & {
    loading?: boolean;
    selectedKey?: number | string;
    selectedValue?: number | string;
    selectedColor?: string;
  } & ExtraProps;

export const TableHeader = styled.div<TableProps>(
  layout,
  color
) as React.FC<TableProps>;

const stringRenderer = (rendererExtraProps: ExtraProps) =>
  React.memo(({ cellData, rowIndex }: CellProps<any>) => (
    <Box key={cellData + rowIndex}  >
      <Typography $size={rendererExtraProps.stringVariant}  >
        {cellData}
      </Typography>
    </Box>
  ));

const tooltipRenderer = (rendererExtraProps: ExtraProps) =>
  React.memo(({ cellData, rowIndex }: CellProps<any>) => (
    <Box key={cellData + rowIndex}>
      <Tooltip
        {...rendererExtraProps.tooltipProps}
        id={String(rowIndex) + cellData}
      >
        {cellData}
      </Tooltip>
      <Typography
        $size={rendererExtraProps.stringVariant}
        $tooltipId={String(rowIndex) + cellData}
      >
        {cellData}
      </Typography>
    </Box>
  ));

const stringHeaderRenderer = (rendererExtraProps: ExtraProps) =>
  React.memo(({ column, columnIndex }: CellProps<any>) => (
    <Box key={(column.title || " ") + columnIndex}>
      <Typography $capitalizeFirstLetter $size={rendererExtraProps.stringVariant} fontWeight='bold'>
        {column.title}
      </Typography>

    </Box>
  ));

const checkboxRenderer = (rendererExtraProps: ExtraProps) =>
  React.memo(({ rowIndex }: CellProps<any>) => <Checkbox />);

const colorRenderer =
  (rendererExtraProps: ExtraProps) =>
    ({
      cellData: { color: colorPropRenderer, colorText },
      rowIndex,
    }: CellProps<any>) =>
      <Box key={colorText + rowIndex}>//TODO create component with color</Box>;

export const Table = <T,>({
  components,
  renderers,
  loadingMore,
  emptyRendererLoadingComponent,
  emptyRendererErrorText,
  emptyRendererEmptyText,
  onEndReached,
  tooltipProps,
  selectedKey,
  selectedColor,
  selectedValue,
  loading,
  ...props
}: React.PropsWithChildren<TableProps>): ReactElement<any, any> | null => {
  const stringVariant = props.stringVariant;
  const rendererExtraProps = useMemo(
    () => ({ tooltipProps, stringVariant }),
    [tooltipProps, stringVariant]
  );
  const defaultRenderers: Record<
    RendererFormat,
    (cellProps: CellProps<T>) => ReactElement
  > = useMemo(
    () => ({
      string: stringRenderer(rendererExtraProps),
      tooltip: tooltipRenderer(rendererExtraProps),
      stringHeaderRenderer: stringHeaderRenderer(rendererExtraProps),
      checkbox: checkboxRenderer(rendererExtraProps),
      color: colorRenderer(rendererExtraProps),
      ...renderers,
    }),
    [renderers, rendererExtraProps]
  );

  const Cell = useCallback(
    (cellProps: CellProps<T>) => {
      const format = cellProps.column.format || "string";
      const Renderer =
        defaultRenderers[format as RendererFormat] || defaultRenderers.string;
      const MemoizedRenderer = React.memo(Renderer);
      return <MemoizedRenderer {...cellProps} />;
    },
    [defaultRenderers]
  );

  const TableHeaderCell = useCallback(
    (cellProps: CellProps<T>) => {
      const Renderer = defaultRenderers.stringHeaderRenderer;
      const MemoizedRenderer = React.memo(Renderer);
      return (<MemoizedRenderer {...cellProps} />) as any;
    },
    [defaultRenderers]
  );

  const footerRenderer = useCallback(() => {
    if (!loadingMore) return null;
    return (
      <Flex justifyContent="center" alignItems="center" height="100%">
        <SimpleLoader />
      </Flex>
    );
  }, [loadingMore]);

  const onEndReachedInner = useCallback(
    (...args: any) => {
      if (onEndReached) onEndReached(args);
    },
    [onEndReached]
  );

  const defaultComponents = useMemo(
    () => ({
      TableCell: Cell,
      TableHeaderCell: TableHeaderCell as any,
    }),
    [Cell, TableHeaderCell]
  );

  const renderOverlay = () => {
    if (loadingMore)
      return (
        <LoadingMoreLayer>
          <LoadingMoreText>Loading More</LoadingMoreText>
          <SimpleLoader />
        </LoadingMoreLayer>
      );
    if (loading)
      return (
        <LoadingLayer>
          <SimpleLoader />
        </LoadingLayer>
      );

    return null;
  };

  const emptyTableRenderer = useCallback(
    () => (loading ? null : <Empty>No data available</Empty>),
    [props.data, loading]
  );

  const rowClassName = useMemo(
    () =>
      ({ rowData }: any) => {
        return selectedKey
          ? rowData[selectedKey] === selectedValue
            ? "selectedRow"
            : ""
          : "";
      },
    [selectedKey, selectedValue]
  );
  return (
    <ReactBaseTableExtra.AutoResizer>

      {({ width, height }) => (
        <BaseTable
          {...{ width, height }}
          footerHeight={loadingMore ? 50 : 0}
          // footerRenderer={footerRenderer}
          rowClassName={rowClassName}
          overlayRenderer={renderOverlay}
          onEndReachedThreshold={300}
          emptyRenderer={emptyTableRenderer}
          onEndReached={onEndReachedInner}
          components={{ ...defaultComponents, ...components }}
          fixed
          {...props}
        />
      )}
    </ReactBaseTableExtra.AutoResizer>
  );
};

Table.defaultProps = {
  stringVariant: "h6",
  tooltipProps: {
    backgroundColor: "red",
    place: "right",
  },
};

const Sort: Record<
  ReactBaseTableExtra.SortOrder,
  ReactBaseTableExtra.SortOrder
> = {
  asc: "asc",
  desc: "desc",
};

const ReactBaseTable = {
  ...ReactBaseTableExtra,
  Constants: { Sort },
};

//create helper type

type SortOrder = ReactBaseTableExtra.SortOrder;
export { ReactBaseTable };
export type { ColumnShape, SortOrder };
