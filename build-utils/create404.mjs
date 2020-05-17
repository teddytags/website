import { copyFile } from "fs";
copyFile("build/index.html", "build/404.html", () => {
  console.log("Made 404 in /build");
});
