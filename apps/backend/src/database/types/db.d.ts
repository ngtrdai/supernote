/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Json = JsonValue;

export type JsonArray = JsonValue[];

export type JsonObject = {
  [x: string]: JsonValue | undefined;
};

export type JsonPrimitive = boolean | number | string | null;

export type JsonValue = JsonArray | JsonObject | JsonPrimitive;

export type Timestamp = ColumnType<Date, Date | string>;

export interface Users {
  avatar: string | null;
  createdAt: Generated<Timestamp>;
  deletedAt: Timestamp | null;
  email: string;
  id: Generated<string>;
  locale: string | null;
  name: string | null;
  password: string | null;
  role: string | null;
  settings: Json | null;
  timezone: string | null;
  updatedAt: Generated<Timestamp>;
  workspaceId: string | null;
}

export interface Workspaces {
  createdAt: Generated<Timestamp>;
  customDomain: string | null;
  defaultRole: Generated<string>;
  deletedAt: Timestamp | null;
  description: string | null;
  emailDomains: Generated<string[] | null>;
  hostname: string | null;
  id: Generated<string>;
  logo: string | null;
  name: string | null;
  settings: Json | null;
  updatedAt: Generated<Timestamp>;
}

export interface DB {
  users: Users;
  workspaces: Workspaces;
}
