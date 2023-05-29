import React from "react";
import { Button, Card, Flex, Input } from "../ui";
import { Close } from "../shared/assets/svg";
import { useForm } from "react-hook-form";
export const Facebook: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", password: "" },
    shouldFocusError: true,
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Flex
      width="1000px"
      height="1000px"
      fullSize
      justifyContent="center"
      alignItems="center"
    >
      <Card height={500} p={4} m={3} width={400}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            $shape="default"
            $variant="light"
            $size="large"
            $placeholder="User name"
            {...register("name", {
              required: { value: true, message: "Required" },
            })}
            $error={errors?.name?.message || ""}
          />
          <Input
            $shape="default"
            $variant="light"
            $size="large"
            $suffix={<Close />}
            $error={errors?.password?.message || ""}
            $placeholder="password"
            {...register("password", {
              required: { value: true, message: "Required" },
            })}
          />
          <Button
            onClick={handleSubmit(onSubmit)}
            $size="large"
            $fill
            $variant="primary"
            $block
          >
            Sign in
          </Button>
          <Button
            $withBorder={false}
            $withEffect={false}
            $withShadow={false}
            $link
            $size="large"
            $variant="primary"
            $block
          >
            Forget Password
          </Button>
          <Flex mt={3} pt={4} borderTop="1px solid #737373">
            <Button $size="large" $fill $withEffect $variant="success" $block>
              Create New Account
            </Button>
          </Flex>
        </form>
      </Card>
    </Flex>
  );
};
