import swc from '@swc/core';

const { Buffer } = globalThis;

export default async ({ file: { buffer, path }, options }) => {
  options = { filename: path, ...options };
  const { code } = await swc.transform(buffer.toString(), options);
  return { buffer: Buffer.from(code) };
};
