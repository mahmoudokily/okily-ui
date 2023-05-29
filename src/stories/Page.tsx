import React from "react";
import { Close, Save } from "../shared/assets/svg";
import Search from "../shared/Search";
import { Box, Button, Flex, Input, Typography } from "../ui";
import { FixedBox } from "../ui/fixedBox/FixedBox";
import { typography } from "../ui/theme/typography";
import { Tooltip } from "../ui/tooltip/Tooltip";

import "./page.css";
import { useState } from "react";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();
  const variants = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
  ];
  const [status, setStatus] = useState<boolean>(true);

  return (
    <Flex fullSize>
      <Flex p={30} maxWidth={500} margin="auto" fullSize height={700}>
        <Flex height={600} width={200}>
          <FixedBox $space={55} $status={status} $setStatus={setStatus}>
            <Button>Country</Button>
            <Box bg="red" width={400} height={300}>
              ~Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos fugiat, eos unde nulla cupiditate nemo similique et,
              ea deserunt ullam tempore explicabo, rerum nesciunt! Voluptatibus
              eum hic doloribus consequatur tenetur?
            </Box>
          </FixedBox>
        </Flex>
        <Flex
          height={400}
          width={400}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {variants.map((v, index) => {
            return (
              <Tooltip key={index} $size="small" $variant={v as any}>
                <Button $withEffect={false}>Black</Button>
                <Flex>Tooltip text {v}</Flex>
              </Tooltip>
            );
          })}
        </Flex>
        {variants?.map((v) => {
          return (
            <Flex mt={4}>
              <Flex flexDirection="row">
                <Typography
                  $size={"body20"}
                  $variant={v as any}
                  display="block"
                >
                  {" "}
                  Typography element with size
                </Typography>
                {/* <Input $prefix={<Search />} $suffix={<Close />} $placeholder='placeholder' $fill $size='large' $variant={v as any} mr={2} /> */}
                <Button
                  $loading
                  $withShadow={false}
                  $icon={<Save />}
                  $fill
                  $size="large"
                  $variant={v as any}
                >
                  Submit with tooltip
                </Button>
                <Button
                  $withShadow={false}
                  $icon={<Save />}
                  $fill
                  $size="small"
                  $variant={v as any}
                >
                  Submit with tooltip
                </Button>
              </Flex>
              <Flex mt={2} flexDirection="row">
                <Input
                  $prefix={<Search />}
                  $placeholder="placeholder"
                  $fill
                  $size="default"
                  $variant={v as any}
                />
                <Button $fill $size="default" $variant={v as any}>
                  Submit
                </Button>
              </Flex>
              <Flex mt={2} flexDirection="row">
                <Input
                  $placeholder="placeholder"
                  $fill
                  $size="small"
                  $variant={v as any}
                />
                <Button $fill $size="small" $variant={v as any}>
                  Submit
                </Button>
              </Flex>
              <Flex mt={2} flexDirection="row">
                <Input
                  $placeholder="placeholder"
                  $fill
                  $size="small"
                  $variant={v as any}
                />
                <Button $fill $size="small" $variant={v as any}>
                  Submit
                </Button>
              </Flex>
              <Flex mt={3} flexDirection="row">
                <Input
                  $placeholder="placeholder"
                  $size="large"
                  $variant={v as any}
                />
                <Button $loading $size="large" $variant={v as any}>
                  Submit
                </Button>
              </Flex>
              <Flex mt={2} flexDirection="row">
                <Input
                  $placeholder="placeholder"
                  $size="default"
                  $variant={v as any}
                />
                <Button $loading $size="default" $variant={v as any}>
                  Submit
                </Button>
              </Flex>
              <Flex mt={2} flexDirection="row">
                <Input
                  $placeholder="placeholder"
                  $size="small"
                  $variant={v as any}
                />
                <Button $loading $size="small" $variant={v as any}>
                  Submit
                </Button>
              </Flex>
              <Flex mt={2} flexDirection="row">
                <Input
                  $placeholder="placeholder"
                  $fill
                  $size="small"
                  $variant={v as any}
                />
                <Button $loading $size="small" $variant={v as any}>
                  Submit
                </Button>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Flex p={6}>
        {Object.keys(typography).map((k) => {
          return (
            <Flex>
              {variants.map((v) => {
                return (
                  <Typography
                    $tooltipId="22"
                    $tooltipText="test"
                    $variant={v as any}
                    $size={k as any}
                  >
                    {" "}
                    Typography element with size {k}
                  </Typography>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
