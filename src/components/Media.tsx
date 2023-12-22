import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [
    {
      title: "本站不保存你的私钥",
      linkText: "如题",
      link: "https://github.com/vectorisvector/Polaris",
    },
  ];

  return (
    <div className=" py-4">
      <div className=" flex items-center justify-center gap-x-4 max-sm:flex-col">
        {mediaList.map(({ title, linkText, link }) => {
          return (
            <div
              key={title}
              className=" flex items-center gap-2"
            >
              <span>{title}:</span>
              <Box
                component={Link}
                href={link}
                className=" hover:underline"
                sx={{
                  color: "primary.main",
                }}
              >
                {linkText}
              </Box>
            </div>
          );
        })}
      </div>

      <div className=" text-center">
        <span>广告位招租☕️, dm </span>
        <Box
          component={Link}
          href={"https://twitter.com/cybervector_"}
          className=" hover:underline"
          sx={{
            color: "primary.main",
          }}
        >
          @cybervector_
        </Box>
      </div>
    </div>
  );
}
