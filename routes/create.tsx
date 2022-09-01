/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers } from "$fresh/server.ts";

import { setCookie } from "$std/http/cookie.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    //resp.headers.set("X-Custom-Header", "Hello");

    setCookie(resp.headers, {
      name: "test_cookie",
      value: "test",
      maxAge: 60 * 60 * 24 * 7, // one week
      httpOnly: true,
    });

    return resp;
  },
};

export default function Create() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p class={tw`my-6`}>
        Created Cookie
      </p>
      <br />
      <br />
      <br />
      <a class={tw`my-6`} href="/">
        Go Back
      </a>
    </div>
  );
}
