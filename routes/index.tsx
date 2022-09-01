/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <a class={tw`my-6`} href="/create">
        Create Cookie
      </a>
      <br />
      <br />
      <br />
      <a class={tw`my-6`} href="/user/delete">
        Delete Cookie (not work)
      </a>
      <br />
      <br />
      <br />
      <a class={tw`my-6`} href="/delete">
        Delete Cookie (ok)
      </a>
    </div>
  );
}
