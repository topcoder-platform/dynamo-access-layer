/* eslint-disable */
import type { handleUnaryCall, UntypedServiceImplementation } from "@grpc/grpc-js";
import { NullValue, nullValueFromJSON, nullValueToJSON, Struct } from "@topcoder-framework/lib-common";
import _m0 from "protobufjs/minimal";

export enum DataType {
  DATA_TYPE_UNSPECIFIED = 0,
  DATA_TYPE_BOOLEAN = 1,
  DATA_TYPE_BINARY = 2,
  DATA_TYPE_LIST = 3,
  DATA_TYPE_MAP = 4,
  DATA_TYPE_NULL = 5,
  DATA_TYPE_NUMBER = 6,
  DATA_TYPE_NUMBER_SET = 7,
  DATA_TYPE_STRING = 8,
  DATA_TYPE_STRING_SET = 9,
  UNRECOGNIZED = -1,
}

export function dataTypeFromJSON(object: any): DataType {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNSPECIFIED":
      return DataType.DATA_TYPE_UNSPECIFIED;
    case 1:
    case "DATA_TYPE_BOOLEAN":
      return DataType.DATA_TYPE_BOOLEAN;
    case 2:
    case "DATA_TYPE_BINARY":
      return DataType.DATA_TYPE_BINARY;
    case 3:
    case "DATA_TYPE_LIST":
      return DataType.DATA_TYPE_LIST;
    case 4:
    case "DATA_TYPE_MAP":
      return DataType.DATA_TYPE_MAP;
    case 5:
    case "DATA_TYPE_NULL":
      return DataType.DATA_TYPE_NULL;
    case 6:
    case "DATA_TYPE_NUMBER":
      return DataType.DATA_TYPE_NUMBER;
    case 7:
    case "DATA_TYPE_NUMBER_SET":
      return DataType.DATA_TYPE_NUMBER_SET;
    case 8:
    case "DATA_TYPE_STRING":
      return DataType.DATA_TYPE_STRING;
    case 9:
    case "DATA_TYPE_STRING_SET":
      return DataType.DATA_TYPE_STRING_SET;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}

export function dataTypeToJSON(object: DataType): string {
  switch (object) {
    case DataType.DATA_TYPE_UNSPECIFIED:
      return "DATA_TYPE_UNSPECIFIED";
    case DataType.DATA_TYPE_BOOLEAN:
      return "DATA_TYPE_BOOLEAN";
    case DataType.DATA_TYPE_BINARY:
      return "DATA_TYPE_BINARY";
    case DataType.DATA_TYPE_LIST:
      return "DATA_TYPE_LIST";
    case DataType.DATA_TYPE_MAP:
      return "DATA_TYPE_MAP";
    case DataType.DATA_TYPE_NULL:
      return "DATA_TYPE_NULL";
    case DataType.DATA_TYPE_NUMBER:
      return "DATA_TYPE_NUMBER";
    case DataType.DATA_TYPE_NUMBER_SET:
      return "DATA_TYPE_NUMBER_SET";
    case DataType.DATA_TYPE_STRING:
      return "DATA_TYPE_STRING";
    case DataType.DATA_TYPE_STRING_SET:
      return "DATA_TYPE_STRING_SET";
    case DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Operator {
  OPERATOR_UNSPECIFIED = 0,
  OPERATOR_EQUAL = 1,
  OPERATOR_NOT_EQUAL = 2,
  OPERATOR_GREATER_THAN = 3,
  OPERATOR_GREATER_THAN_OR_EQUAL = 4,
  OPERATOR_LESS_THAN = 5,
  OPERATOR_LESS_THAN_OR_EQUAL = 6,
  OPERATOR_AND = 7,
  OPERATOR_BETWEEN = 8,
  OPERATOR_IN = 9,
  OPERATOR_IS = 10,
  OPERATOR_NOT = 11,
  OPERATOR_OR = 12,
  UNRECOGNIZED = -1,
}

export function operatorFromJSON(object: any): Operator {
  switch (object) {
    case 0:
    case "OPERATOR_UNSPECIFIED":
      return Operator.OPERATOR_UNSPECIFIED;
    case 1:
    case "OPERATOR_EQUAL":
      return Operator.OPERATOR_EQUAL;
    case 2:
    case "OPERATOR_NOT_EQUAL":
      return Operator.OPERATOR_NOT_EQUAL;
    case 3:
    case "OPERATOR_GREATER_THAN":
      return Operator.OPERATOR_GREATER_THAN;
    case 4:
    case "OPERATOR_GREATER_THAN_OR_EQUAL":
      return Operator.OPERATOR_GREATER_THAN_OR_EQUAL;
    case 5:
    case "OPERATOR_LESS_THAN":
      return Operator.OPERATOR_LESS_THAN;
    case 6:
    case "OPERATOR_LESS_THAN_OR_EQUAL":
      return Operator.OPERATOR_LESS_THAN_OR_EQUAL;
    case 7:
    case "OPERATOR_AND":
      return Operator.OPERATOR_AND;
    case 8:
    case "OPERATOR_BETWEEN":
      return Operator.OPERATOR_BETWEEN;
    case 9:
    case "OPERATOR_IN":
      return Operator.OPERATOR_IN;
    case 10:
    case "OPERATOR_IS":
      return Operator.OPERATOR_IS;
    case 11:
    case "OPERATOR_NOT":
      return Operator.OPERATOR_NOT;
    case 12:
    case "OPERATOR_OR":
      return Operator.OPERATOR_OR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Operator.UNRECOGNIZED;
  }
}

export function operatorToJSON(object: Operator): string {
  switch (object) {
    case Operator.OPERATOR_UNSPECIFIED:
      return "OPERATOR_UNSPECIFIED";
    case Operator.OPERATOR_EQUAL:
      return "OPERATOR_EQUAL";
    case Operator.OPERATOR_NOT_EQUAL:
      return "OPERATOR_NOT_EQUAL";
    case Operator.OPERATOR_GREATER_THAN:
      return "OPERATOR_GREATER_THAN";
    case Operator.OPERATOR_GREATER_THAN_OR_EQUAL:
      return "OPERATOR_GREATER_THAN_OR_EQUAL";
    case Operator.OPERATOR_LESS_THAN:
      return "OPERATOR_LESS_THAN";
    case Operator.OPERATOR_LESS_THAN_OR_EQUAL:
      return "OPERATOR_LESS_THAN_OR_EQUAL";
    case Operator.OPERATOR_AND:
      return "OPERATOR_AND";
    case Operator.OPERATOR_BETWEEN:
      return "OPERATOR_BETWEEN";
    case Operator.OPERATOR_IN:
      return "OPERATOR_IN";
    case Operator.OPERATOR_IS:
      return "OPERATOR_IS";
    case Operator.OPERATOR_NOT:
      return "OPERATOR_NOT";
    case Operator.OPERATOR_OR:
      return "OPERATOR_OR";
    case Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum Error {
  ERROR_UNSPECIFIED = 0,
  ERROR_DATABASE_ERROR = 1,
  ERROR_INVALID_ARGUMENT = 2,
  ERROR_INVALID_QUERY = 3,
  ERROR_NOT_FOUND = 4,
  ERROR_UNAUTHENTICATED = 5,
  ERROR_UNAUTHORIZED = 6,
  ERROR_UNKNOWN = 7,
  UNRECOGNIZED = -1,
}

export function errorFromJSON(object: any): Error {
  switch (object) {
    case 0:
    case "ERROR_UNSPECIFIED":
      return Error.ERROR_UNSPECIFIED;
    case 1:
    case "ERROR_DATABASE_ERROR":
      return Error.ERROR_DATABASE_ERROR;
    case 2:
    case "ERROR_INVALID_ARGUMENT":
      return Error.ERROR_INVALID_ARGUMENT;
    case 3:
    case "ERROR_INVALID_QUERY":
      return Error.ERROR_INVALID_QUERY;
    case 4:
    case "ERROR_NOT_FOUND":
      return Error.ERROR_NOT_FOUND;
    case 5:
    case "ERROR_UNAUTHENTICATED":
      return Error.ERROR_UNAUTHENTICATED;
    case 6:
    case "ERROR_UNAUTHORIZED":
      return Error.ERROR_UNAUTHORIZED;
    case 7:
    case "ERROR_UNKNOWN":
      return Error.ERROR_UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Error.UNRECOGNIZED;
  }
}

export function errorToJSON(object: Error): string {
  switch (object) {
    case Error.ERROR_UNSPECIFIED:
      return "ERROR_UNSPECIFIED";
    case Error.ERROR_DATABASE_ERROR:
      return "ERROR_DATABASE_ERROR";
    case Error.ERROR_INVALID_ARGUMENT:
      return "ERROR_INVALID_ARGUMENT";
    case Error.ERROR_INVALID_QUERY:
      return "ERROR_INVALID_QUERY";
    case Error.ERROR_NOT_FOUND:
      return "ERROR_NOT_FOUND";
    case Error.ERROR_UNAUTHENTICATED:
      return "ERROR_UNAUTHENTICATED";
    case Error.ERROR_UNAUTHORIZED:
      return "ERROR_UNAUTHORIZED";
    case Error.ERROR_UNKNOWN:
      return "ERROR_UNKNOWN";
    case Error.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UpdateAction {
  UPDATE_ACTION_UNSPECIFIED = 0,
  UPDATE_ACTION_SET = 1,
  UPDATE_ACTION_REMOVE = 2,
  UNRECOGNIZED = -1,
}

export function updateActionFromJSON(object: any): UpdateAction {
  switch (object) {
    case 0:
    case "UPDATE_ACTION_UNSPECIFIED":
      return UpdateAction.UPDATE_ACTION_UNSPECIFIED;
    case 1:
    case "UPDATE_ACTION_SET":
      return UpdateAction.UPDATE_ACTION_SET;
    case 2:
    case "UPDATE_ACTION_REMOVE":
      return UpdateAction.UPDATE_ACTION_REMOVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateAction.UNRECOGNIZED;
  }
}

export function updateActionToJSON(object: UpdateAction): string {
  switch (object) {
    case UpdateAction.UPDATE_ACTION_UNSPECIFIED:
      return "UPDATE_ACTION_UNSPECIFIED";
    case UpdateAction.UPDATE_ACTION_SET:
      return "UPDATE_ACTION_SET";
    case UpdateAction.UPDATE_ACTION_REMOVE:
      return "UPDATE_ACTION_REMOVE";
    case UpdateAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum UpdateType {
  UPDATE_TYPE_UNSPECIFIED = 0,
  UPDATE_TYPE_VALUE = 1,
  UPDATE_TYPE_SET_ADD = 2,
  UPDATE_TYPE_SET_DELETE = 3,
  UPDATE_TYPE_LIST_APPEND = 4,
  UNRECOGNIZED = -1,
}

export function updateTypeFromJSON(object: any): UpdateType {
  switch (object) {
    case 0:
    case "UPDATE_TYPE_UNSPECIFIED":
      return UpdateType.UPDATE_TYPE_UNSPECIFIED;
    case 1:
    case "UPDATE_TYPE_VALUE":
      return UpdateType.UPDATE_TYPE_VALUE;
    case 2:
    case "UPDATE_TYPE_SET_ADD":
      return UpdateType.UPDATE_TYPE_SET_ADD;
    case 3:
    case "UPDATE_TYPE_SET_DELETE":
      return UpdateType.UPDATE_TYPE_SET_DELETE;
    case 4:
    case "UPDATE_TYPE_LIST_APPEND":
      return UpdateType.UPDATE_TYPE_LIST_APPEND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UpdateType.UNRECOGNIZED;
  }
}

export function updateTypeToJSON(object: UpdateType): string {
  switch (object) {
    case UpdateType.UPDATE_TYPE_UNSPECIFIED:
      return "UPDATE_TYPE_UNSPECIFIED";
    case UpdateType.UPDATE_TYPE_VALUE:
      return "UPDATE_TYPE_VALUE";
    case UpdateType.UPDATE_TYPE_SET_ADD:
      return "UPDATE_TYPE_SET_ADD";
    case UpdateType.UPDATE_TYPE_SET_DELETE:
      return "UPDATE_TYPE_SET_DELETE";
    case UpdateType.UPDATE_TYPE_LIST_APPEND:
      return "UPDATE_TYPE_LIST_APPEND";
    case UpdateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ReturnValue {
  RETURN_VALUE_UNSPECIFIED = 0,
  RETURN_VALUE_ALL_NEW = 1,
  RETURN_VALUE_MODIFIED_NEW = 2,
  RETURN_VALUE_ALL_OLD = 3,
  RETURN_VALUE_MODIFIED_OLD = 4,
  UNRECOGNIZED = -1,
}

export function returnValueFromJSON(object: any): ReturnValue {
  switch (object) {
    case 0:
    case "RETURN_VALUE_UNSPECIFIED":
      return ReturnValue.RETURN_VALUE_UNSPECIFIED;
    case 1:
    case "RETURN_VALUE_ALL_NEW":
      return ReturnValue.RETURN_VALUE_ALL_NEW;
    case 2:
    case "RETURN_VALUE_MODIFIED_NEW":
      return ReturnValue.RETURN_VALUE_MODIFIED_NEW;
    case 3:
    case "RETURN_VALUE_ALL_OLD":
      return ReturnValue.RETURN_VALUE_ALL_OLD;
    case 4:
    case "RETURN_VALUE_MODIFIED_OLD":
      return ReturnValue.RETURN_VALUE_MODIFIED_OLD;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReturnValue.UNRECOGNIZED;
  }
}

export function returnValueToJSON(object: ReturnValue): string {
  switch (object) {
    case ReturnValue.RETURN_VALUE_UNSPECIFIED:
      return "RETURN_VALUE_UNSPECIFIED";
    case ReturnValue.RETURN_VALUE_ALL_NEW:
      return "RETURN_VALUE_ALL_NEW";
    case ReturnValue.RETURN_VALUE_MODIFIED_NEW:
      return "RETURN_VALUE_MODIFIED_NEW";
    case ReturnValue.RETURN_VALUE_ALL_OLD:
      return "RETURN_VALUE_ALL_OLD";
    case ReturnValue.RETURN_VALUE_MODIFIED_OLD:
      return "RETURN_VALUE_MODIFIED_OLD";
    case ReturnValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface StringSet {
  values: string[];
}

export interface NumberSet {
  values: number[];
}

export interface MapValue {
  values: { [key: string]: Value };
}

export interface MapValue_ValuesEntry {
  key: string;
  value?: Value | undefined;
}

export interface ListValue {
  values: Value[];
}

export interface Value {
  kind?:
    | { $case: "boolean"; boolean: boolean }
    | { $case: "binary"; binary: Buffer }
    | { $case: "listValue"; listValue: ListValue }
    | { $case: "mapValue"; mapValue: MapValue }
    | { $case: "nullValue"; nullValue: NullValue }
    | { $case: "numberValue"; numberValue: number }
    | { $case: "numberSetValue"; numberSetValue: NumberSet }
    | { $case: "stringValue"; stringValue: string }
    | { $case: "stringSetValue"; stringSetValue: StringSet }
    | undefined;
}

export interface Attribute {
  name: string;
  type: DataType;
}

export interface Filter {
  name: string;
  operator: Operator;
  value?: Value | undefined;
}

export interface ValueWithDataType {
  type: DataType;
  value?: Value | undefined;
}

export interface SelectQuery {
  table: string;
  index?: string | undefined;
  attributes: string[];
  filters: Filter[];
  nextToken?: string | undefined;
}

export interface AttributeAndValue {
  attribute?: Attribute | undefined;
  value?: Value | undefined;
}

export interface InsertQuery {
  table: string;
  attributes: AttributeAndValue[];
}

export interface UpdateOperation {
  action: UpdateAction;
  attribute?: Attribute | undefined;
  type: UpdateType;
  value?: Value | undefined;
}

export interface UpdateQuery {
  table: string;
  updates: UpdateOperation[];
  filters: Filter[];
  returnValue?: ReturnValue | undefined;
}

export interface DeleteQuery {
  table: string;
  index?: string | undefined;
  filters: Filter[];
  returnValues?: ReturnValue | undefined;
}

export interface ReadQuery {
  queries: SelectQuery[];
}

export interface WriteQuery {
  kind?: { $case: "insert"; insert: InsertQuery } | { $case: "update"; update: UpdateQuery } | {
    $case: "delete";
    delete: DeleteQuery;
  } | undefined;
}

export interface BulkWriteQuery {
  queries: WriteQuery[];
}

export interface BulkQuery {
  kind?: { $case: "read"; read: ReadQuery } | { $case: "bulkWriteQueries"; bulkWriteQueries: WriteQuery } | undefined;
}

export interface Query {
  kind?:
    | { $case: "select"; select: SelectQuery }
    | { $case: "insert"; insert: InsertQuery }
    | { $case: "update"; update: UpdateQuery }
    | { $case: "delete"; delete: DeleteQuery }
    | undefined;
}

export interface Response {
  items: { [key: string]: any }[];
  nextToken?: string | undefined;
}

export interface QueryRequest {
  kind?: { $case: "query"; query: Query } | { $case: "queries"; queries: BulkQuery } | undefined;
}

export interface ResponseError {
  message: string;
}

export interface QueryResponse {
  kind?: { $case: "response"; response: Response } | { $case: "error"; error: ResponseError } | undefined;
}

function createBaseStringSet(): StringSet {
  return { values: [] };
}

export const StringSet = {
  encode(message: StringSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StringSet {
    return {
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: StringSet): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StringSet>, I>>(base?: I): StringSet {
    return StringSet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StringSet>, I>>(object: I): StringSet {
    const message = createBaseStringSet();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseNumberSet(): NumberSet {
  return { values: [] };
}

export const NumberSet = {
  encode(message: NumberSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.values) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NumberSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNumberSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 9) {
            message.values.push(reader.double());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.values.push(reader.double());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NumberSet {
    return {
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.Number(e)) : [],
    };
  },

  toJSON(message: NumberSet): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NumberSet>, I>>(base?: I): NumberSet {
    return NumberSet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NumberSet>, I>>(object: I): NumberSet {
    const message = createBaseNumberSet();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseMapValue(): MapValue {
  return { values: {} };
}

export const MapValue = {
  encode(message: MapValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.values).forEach(([key, value]) => {
      MapValue_ValuesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = MapValue_ValuesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.values[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapValue {
    return {
      values: isObject(object.values)
        ? Object.entries(object.values).reduce<{ [key: string]: Value }>((acc, [key, value]) => {
          acc[key] = Value.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: MapValue): unknown {
    const obj: any = {};
    if (message.values) {
      const entries = Object.entries(message.values);
      if (entries.length > 0) {
        obj.values = {};
        entries.forEach(([k, v]) => {
          obj.values[k] = Value.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapValue>, I>>(base?: I): MapValue {
    return MapValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapValue>, I>>(object: I): MapValue {
    const message = createBaseMapValue();
    message.values = Object.entries(object.values ?? {}).reduce<{ [key: string]: Value }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Value.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseMapValue_ValuesEntry(): MapValue_ValuesEntry {
  return { key: "", value: undefined };
}

export const MapValue_ValuesEntry = {
  encode(message: MapValue_ValuesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue_ValuesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue_ValuesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MapValue_ValuesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MapValue_ValuesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MapValue_ValuesEntry>, I>>(base?: I): MapValue_ValuesEntry {
    return MapValue_ValuesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MapValue_ValuesEntry>, I>>(object: I): MapValue_ValuesEntry {
    const message = createBaseMapValue_ValuesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseListValue(): ListValue {
  return { values: [] };
}

export const ListValue = {
  encode(message: ListValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListValue {
    return { values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromJSON(e)) : [] };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values.map((e) => Value.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListValue>, I>>(base?: I): ListValue {
    return ListValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListValue>, I>>(object: I): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map((e) => Value.fromPartial(e)) || [];
    return message;
  },
};

function createBaseValue(): Value {
  return { kind: undefined };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.kind?.$case) {
      case "boolean":
        writer.uint32(8).bool(message.kind.boolean);
        break;
      case "binary":
        writer.uint32(18).bytes(message.kind.binary);
        break;
      case "listValue":
        ListValue.encode(message.kind.listValue, writer.uint32(26).fork()).ldelim();
        break;
      case "mapValue":
        MapValue.encode(message.kind.mapValue, writer.uint32(34).fork()).ldelim();
        break;
      case "nullValue":
        writer.uint32(40).int32(message.kind.nullValue);
        break;
      case "numberValue":
        writer.uint32(49).double(message.kind.numberValue);
        break;
      case "numberSetValue":
        NumberSet.encode(message.kind.numberSetValue, writer.uint32(58).fork()).ldelim();
        break;
      case "stringValue":
        writer.uint32(66).string(message.kind.stringValue);
        break;
      case "stringSetValue":
        StringSet.encode(message.kind.stringSetValue, writer.uint32(74).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = { $case: "boolean", boolean: reader.bool() };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kind = { $case: "binary", binary: reader.bytes() as Buffer };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.kind = { $case: "listValue", listValue: ListValue.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.kind = { $case: "mapValue", mapValue: MapValue.decode(reader, reader.uint32()) };
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.kind = { $case: "nullValue", nullValue: reader.int32() as any };
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.kind = { $case: "numberValue", numberValue: reader.double() };
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.kind = { $case: "numberSetValue", numberSetValue: NumberSet.decode(reader, reader.uint32()) };
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.kind = { $case: "stringValue", stringValue: reader.string() };
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.kind = { $case: "stringSetValue", stringSetValue: StringSet.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value {
    return {
      kind: isSet(object.boolean)
        ? { $case: "boolean", boolean: globalThis.Boolean(object.boolean) }
        : isSet(object.binary)
        ? { $case: "binary", binary: Buffer.from(bytesFromBase64(object.binary)) }
        : isSet(object.listValue)
        ? { $case: "listValue", listValue: ListValue.fromJSON(object.listValue) }
        : isSet(object.mapValue)
        ? { $case: "mapValue", mapValue: MapValue.fromJSON(object.mapValue) }
        : isSet(object.nullValue)
        ? { $case: "nullValue", nullValue: nullValueFromJSON(object.nullValue) }
        : isSet(object.numberValue)
        ? { $case: "numberValue", numberValue: globalThis.Number(object.numberValue) }
        : isSet(object.numberSetValue)
        ? { $case: "numberSetValue", numberSetValue: NumberSet.fromJSON(object.numberSetValue) }
        : isSet(object.stringValue)
        ? { $case: "stringValue", stringValue: globalThis.String(object.stringValue) }
        : isSet(object.stringSetValue)
        ? { $case: "stringSetValue", stringSetValue: StringSet.fromJSON(object.stringSetValue) }
        : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    if (message.kind?.$case === "boolean") {
      obj.boolean = message.kind.boolean;
    }
    if (message.kind?.$case === "binary") {
      obj.binary = base64FromBytes(message.kind.binary);
    }
    if (message.kind?.$case === "listValue") {
      obj.listValue = ListValue.toJSON(message.kind.listValue);
    }
    if (message.kind?.$case === "mapValue") {
      obj.mapValue = MapValue.toJSON(message.kind.mapValue);
    }
    if (message.kind?.$case === "nullValue") {
      obj.nullValue = nullValueToJSON(message.kind.nullValue);
    }
    if (message.kind?.$case === "numberValue") {
      obj.numberValue = message.kind.numberValue;
    }
    if (message.kind?.$case === "numberSetValue") {
      obj.numberSetValue = NumberSet.toJSON(message.kind.numberSetValue);
    }
    if (message.kind?.$case === "stringValue") {
      obj.stringValue = message.kind.stringValue;
    }
    if (message.kind?.$case === "stringSetValue") {
      obj.stringSetValue = StringSet.toJSON(message.kind.stringSetValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Value>, I>>(base?: I): Value {
    return Value.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
    if (object.kind?.$case === "boolean" && object.kind?.boolean !== undefined && object.kind?.boolean !== null) {
      message.kind = { $case: "boolean", boolean: object.kind.boolean };
    }
    if (object.kind?.$case === "binary" && object.kind?.binary !== undefined && object.kind?.binary !== null) {
      message.kind = { $case: "binary", binary: object.kind.binary };
    }
    if (object.kind?.$case === "listValue" && object.kind?.listValue !== undefined && object.kind?.listValue !== null) {
      message.kind = { $case: "listValue", listValue: ListValue.fromPartial(object.kind.listValue) };
    }
    if (object.kind?.$case === "mapValue" && object.kind?.mapValue !== undefined && object.kind?.mapValue !== null) {
      message.kind = { $case: "mapValue", mapValue: MapValue.fromPartial(object.kind.mapValue) };
    }
    if (object.kind?.$case === "nullValue" && object.kind?.nullValue !== undefined && object.kind?.nullValue !== null) {
      message.kind = { $case: "nullValue", nullValue: object.kind.nullValue };
    }
    if (
      object.kind?.$case === "numberValue" &&
      object.kind?.numberValue !== undefined &&
      object.kind?.numberValue !== null
    ) {
      message.kind = { $case: "numberValue", numberValue: object.kind.numberValue };
    }
    if (
      object.kind?.$case === "numberSetValue" &&
      object.kind?.numberSetValue !== undefined &&
      object.kind?.numberSetValue !== null
    ) {
      message.kind = { $case: "numberSetValue", numberSetValue: NumberSet.fromPartial(object.kind.numberSetValue) };
    }
    if (
      object.kind?.$case === "stringValue" &&
      object.kind?.stringValue !== undefined &&
      object.kind?.stringValue !== null
    ) {
      message.kind = { $case: "stringValue", stringValue: object.kind.stringValue };
    }
    if (
      object.kind?.$case === "stringSetValue" &&
      object.kind?.stringSetValue !== undefined &&
      object.kind?.stringSetValue !== null
    ) {
      message.kind = { $case: "stringSetValue", stringSetValue: StringSet.fromPartial(object.kind.stringSetValue) };
    }
    return message;
  },
};

function createBaseAttribute(): Attribute {
  return { name: "", type: 0 };
}

export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attribute {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      type: isSet(object.type) ? dataTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== 0) {
      obj.type = dataTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attribute>, I>>(base?: I): Attribute {
    return Attribute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute {
    const message = createBaseAttribute();
    message.name = object.name ?? "";
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseFilter(): Filter {
  return { name: "", operator: 0, value: undefined };
}

export const Filter = {
  encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.operator !== 0) {
      writer.uint32(16).int32(message.operator);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.operator = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.value = Value.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      operator: isSet(object.operator) ? operatorFromJSON(object.operator) : 0,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.operator !== 0) {
      obj.operator = operatorToJSON(message.operator);
    }
    if (message.value !== undefined) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Filter>, I>>(base?: I): Filter {
    return Filter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
    const message = createBaseFilter();
    message.name = object.name ?? "";
    message.operator = object.operator ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseValueWithDataType(): ValueWithDataType {
  return { type: 0, value: undefined };
}

export const ValueWithDataType = {
  encode(message: ValueWithDataType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValueWithDataType {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValueWithDataType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValueWithDataType {
    return {
      type: isSet(object.type) ? dataTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ValueWithDataType): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = dataTypeToJSON(message.type);
    }
    if (message.value !== undefined) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValueWithDataType>, I>>(base?: I): ValueWithDataType {
    return ValueWithDataType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValueWithDataType>, I>>(object: I): ValueWithDataType {
    const message = createBaseValueWithDataType();
    message.type = object.type ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseSelectQuery(): SelectQuery {
  return { table: "", index: undefined, attributes: [], filters: [], nextToken: undefined };
}

export const SelectQuery = {
  encode(message: SelectQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    if (message.index !== undefined) {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.attributes) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextToken !== undefined) {
      writer.uint32(42).string(message.nextToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SelectQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSelectQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.table = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.index = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.attributes.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.filters.push(Filter.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nextToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SelectQuery {
    return {
      table: isSet(object.table) ? globalThis.String(object.table) : "",
      index: isSet(object.index) ? globalThis.String(object.index) : undefined,
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => globalThis.String(e))
        : [],
      filters: globalThis.Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      nextToken: isSet(object.nextToken) ? globalThis.String(object.nextToken) : undefined,
    };
  },

  toJSON(message: SelectQuery): unknown {
    const obj: any = {};
    if (message.table !== "") {
      obj.table = message.table;
    }
    if (message.index !== undefined) {
      obj.index = message.index;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes;
    }
    if (message.filters?.length) {
      obj.filters = message.filters.map((e) => Filter.toJSON(e));
    }
    if (message.nextToken !== undefined) {
      obj.nextToken = message.nextToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SelectQuery>, I>>(base?: I): SelectQuery {
    return SelectQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SelectQuery>, I>>(object: I): SelectQuery {
    const message = createBaseSelectQuery();
    message.table = object.table ?? "";
    message.index = object.index ?? undefined;
    message.attributes = object.attributes?.map((e) => e) || [];
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.nextToken = object.nextToken ?? undefined;
    return message;
  },
};

function createBaseAttributeAndValue(): AttributeAndValue {
  return { attribute: undefined, value: undefined };
}

export const AttributeAndValue = {
  encode(message: AttributeAndValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.attribute !== undefined) {
      Attribute.encode(message.attribute, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeAndValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeAndValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.attribute = Attribute.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttributeAndValue {
    return {
      attribute: isSet(object.attribute) ? Attribute.fromJSON(object.attribute) : undefined,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: AttributeAndValue): unknown {
    const obj: any = {};
    if (message.attribute !== undefined) {
      obj.attribute = Attribute.toJSON(message.attribute);
    }
    if (message.value !== undefined) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttributeAndValue>, I>>(base?: I): AttributeAndValue {
    return AttributeAndValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttributeAndValue>, I>>(object: I): AttributeAndValue {
    const message = createBaseAttributeAndValue();
    message.attribute = (object.attribute !== undefined && object.attribute !== null)
      ? Attribute.fromPartial(object.attribute)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseInsertQuery(): InsertQuery {
  return { table: "", attributes: [] };
}

export const InsertQuery = {
  encode(message: InsertQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    for (const v of message.attributes) {
      AttributeAndValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InsertQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInsertQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.table = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attributes.push(AttributeAndValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InsertQuery {
    return {
      table: isSet(object.table) ? globalThis.String(object.table) : "",
      attributes: globalThis.Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => AttributeAndValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: InsertQuery): unknown {
    const obj: any = {};
    if (message.table !== "") {
      obj.table = message.table;
    }
    if (message.attributes?.length) {
      obj.attributes = message.attributes.map((e) => AttributeAndValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InsertQuery>, I>>(base?: I): InsertQuery {
    return InsertQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InsertQuery>, I>>(object: I): InsertQuery {
    const message = createBaseInsertQuery();
    message.table = object.table ?? "";
    message.attributes = object.attributes?.map((e) => AttributeAndValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpdateOperation(): UpdateOperation {
  return { action: 0, attribute: undefined, type: 0, value: undefined };
}

export const UpdateOperation = {
  encode(message: UpdateOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== 0) {
      writer.uint32(8).int32(message.action);
    }
    if (message.attribute !== undefined) {
      Attribute.encode(message.attribute, writer.uint32(18).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateOperation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attribute = Attribute.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.value = Value.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateOperation {
    return {
      action: isSet(object.action) ? updateActionFromJSON(object.action) : 0,
      attribute: isSet(object.attribute) ? Attribute.fromJSON(object.attribute) : undefined,
      type: isSet(object.type) ? updateTypeFromJSON(object.type) : 0,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: UpdateOperation): unknown {
    const obj: any = {};
    if (message.action !== 0) {
      obj.action = updateActionToJSON(message.action);
    }
    if (message.attribute !== undefined) {
      obj.attribute = Attribute.toJSON(message.attribute);
    }
    if (message.type !== 0) {
      obj.type = updateTypeToJSON(message.type);
    }
    if (message.value !== undefined) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateOperation>, I>>(base?: I): UpdateOperation {
    return UpdateOperation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateOperation>, I>>(object: I): UpdateOperation {
    const message = createBaseUpdateOperation();
    message.action = object.action ?? 0;
    message.attribute = (object.attribute !== undefined && object.attribute !== null)
      ? Attribute.fromPartial(object.attribute)
      : undefined;
    message.type = object.type ?? 0;
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseUpdateQuery(): UpdateQuery {
  return { table: "", updates: [], filters: [], returnValue: undefined };
}

export const UpdateQuery = {
  encode(message: UpdateQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    for (const v of message.updates) {
      UpdateOperation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.returnValue !== undefined) {
      writer.uint32(32).int32(message.returnValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.table = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updates.push(UpdateOperation.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filters.push(Filter.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.returnValue = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateQuery {
    return {
      table: isSet(object.table) ? globalThis.String(object.table) : "",
      updates: globalThis.Array.isArray(object?.updates)
        ? object.updates.map((e: any) => UpdateOperation.fromJSON(e))
        : [],
      filters: globalThis.Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      returnValue: isSet(object.returnValue) ? returnValueFromJSON(object.returnValue) : undefined,
    };
  },

  toJSON(message: UpdateQuery): unknown {
    const obj: any = {};
    if (message.table !== "") {
      obj.table = message.table;
    }
    if (message.updates?.length) {
      obj.updates = message.updates.map((e) => UpdateOperation.toJSON(e));
    }
    if (message.filters?.length) {
      obj.filters = message.filters.map((e) => Filter.toJSON(e));
    }
    if (message.returnValue !== undefined) {
      obj.returnValue = returnValueToJSON(message.returnValue);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateQuery>, I>>(base?: I): UpdateQuery {
    return UpdateQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateQuery>, I>>(object: I): UpdateQuery {
    const message = createBaseUpdateQuery();
    message.table = object.table ?? "";
    message.updates = object.updates?.map((e) => UpdateOperation.fromPartial(e)) || [];
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.returnValue = object.returnValue ?? undefined;
    return message;
  },
};

function createBaseDeleteQuery(): DeleteQuery {
  return { table: "", index: undefined, filters: [], returnValues: undefined };
}

export const DeleteQuery = {
  encode(message: DeleteQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.table !== "") {
      writer.uint32(10).string(message.table);
    }
    if (message.index !== undefined) {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.returnValues !== undefined) {
      writer.uint32(32).int32(message.returnValues);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.table = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.index = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filters.push(Filter.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.returnValues = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteQuery {
    return {
      table: isSet(object.table) ? globalThis.String(object.table) : "",
      index: isSet(object.index) ? globalThis.String(object.index) : undefined,
      filters: globalThis.Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      returnValues: isSet(object.returnValues) ? returnValueFromJSON(object.returnValues) : undefined,
    };
  },

  toJSON(message: DeleteQuery): unknown {
    const obj: any = {};
    if (message.table !== "") {
      obj.table = message.table;
    }
    if (message.index !== undefined) {
      obj.index = message.index;
    }
    if (message.filters?.length) {
      obj.filters = message.filters.map((e) => Filter.toJSON(e));
    }
    if (message.returnValues !== undefined) {
      obj.returnValues = returnValueToJSON(message.returnValues);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteQuery>, I>>(base?: I): DeleteQuery {
    return DeleteQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteQuery>, I>>(object: I): DeleteQuery {
    const message = createBaseDeleteQuery();
    message.table = object.table ?? "";
    message.index = object.index ?? undefined;
    message.filters = object.filters?.map((e) => Filter.fromPartial(e)) || [];
    message.returnValues = object.returnValues ?? undefined;
    return message;
  },
};

function createBaseReadQuery(): ReadQuery {
  return { queries: [] };
}

export const ReadQuery = {
  encode(message: ReadQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      SelectQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReadQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReadQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.queries.push(SelectQuery.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReadQuery {
    return {
      queries: globalThis.Array.isArray(object?.queries) ? object.queries.map((e: any) => SelectQuery.fromJSON(e)) : [],
    };
  },

  toJSON(message: ReadQuery): unknown {
    const obj: any = {};
    if (message.queries?.length) {
      obj.queries = message.queries.map((e) => SelectQuery.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadQuery>, I>>(base?: I): ReadQuery {
    return ReadQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReadQuery>, I>>(object: I): ReadQuery {
    const message = createBaseReadQuery();
    message.queries = object.queries?.map((e) => SelectQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWriteQuery(): WriteQuery {
  return { kind: undefined };
}

export const WriteQuery = {
  encode(message: WriteQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.kind?.$case) {
      case "insert":
        InsertQuery.encode(message.kind.insert, writer.uint32(10).fork()).ldelim();
        break;
      case "update":
        UpdateQuery.encode(message.kind.update, writer.uint32(18).fork()).ldelim();
        break;
      case "delete":
        DeleteQuery.encode(message.kind.delete, writer.uint32(26).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WriteQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWriteQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = { $case: "insert", insert: InsertQuery.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kind = { $case: "update", update: UpdateQuery.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.kind = { $case: "delete", delete: DeleteQuery.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WriteQuery {
    return {
      kind: isSet(object.insert)
        ? { $case: "insert", insert: InsertQuery.fromJSON(object.insert) }
        : isSet(object.update)
        ? { $case: "update", update: UpdateQuery.fromJSON(object.update) }
        : isSet(object.delete)
        ? { $case: "delete", delete: DeleteQuery.fromJSON(object.delete) }
        : undefined,
    };
  },

  toJSON(message: WriteQuery): unknown {
    const obj: any = {};
    if (message.kind?.$case === "insert") {
      obj.insert = InsertQuery.toJSON(message.kind.insert);
    }
    if (message.kind?.$case === "update") {
      obj.update = UpdateQuery.toJSON(message.kind.update);
    }
    if (message.kind?.$case === "delete") {
      obj.delete = DeleteQuery.toJSON(message.kind.delete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WriteQuery>, I>>(base?: I): WriteQuery {
    return WriteQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WriteQuery>, I>>(object: I): WriteQuery {
    const message = createBaseWriteQuery();
    if (object.kind?.$case === "insert" && object.kind?.insert !== undefined && object.kind?.insert !== null) {
      message.kind = { $case: "insert", insert: InsertQuery.fromPartial(object.kind.insert) };
    }
    if (object.kind?.$case === "update" && object.kind?.update !== undefined && object.kind?.update !== null) {
      message.kind = { $case: "update", update: UpdateQuery.fromPartial(object.kind.update) };
    }
    if (object.kind?.$case === "delete" && object.kind?.delete !== undefined && object.kind?.delete !== null) {
      message.kind = { $case: "delete", delete: DeleteQuery.fromPartial(object.kind.delete) };
    }
    return message;
  },
};

function createBaseBulkWriteQuery(): BulkWriteQuery {
  return { queries: [] };
}

export const BulkWriteQuery = {
  encode(message: BulkWriteQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      WriteQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BulkWriteQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBulkWriteQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.queries.push(WriteQuery.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BulkWriteQuery {
    return {
      queries: globalThis.Array.isArray(object?.queries) ? object.queries.map((e: any) => WriteQuery.fromJSON(e)) : [],
    };
  },

  toJSON(message: BulkWriteQuery): unknown {
    const obj: any = {};
    if (message.queries?.length) {
      obj.queries = message.queries.map((e) => WriteQuery.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BulkWriteQuery>, I>>(base?: I): BulkWriteQuery {
    return BulkWriteQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BulkWriteQuery>, I>>(object: I): BulkWriteQuery {
    const message = createBaseBulkWriteQuery();
    message.queries = object.queries?.map((e) => WriteQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBulkQuery(): BulkQuery {
  return { kind: undefined };
}

export const BulkQuery = {
  encode(message: BulkQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.kind?.$case) {
      case "read":
        ReadQuery.encode(message.kind.read, writer.uint32(10).fork()).ldelim();
        break;
      case "bulkWriteQueries":
        WriteQuery.encode(message.kind.bulkWriteQueries, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BulkQuery {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBulkQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = { $case: "read", read: ReadQuery.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kind = { $case: "bulkWriteQueries", bulkWriteQueries: WriteQuery.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BulkQuery {
    return {
      kind: isSet(object.read)
        ? { $case: "read", read: ReadQuery.fromJSON(object.read) }
        : isSet(object.bulkWriteQueries)
        ? { $case: "bulkWriteQueries", bulkWriteQueries: WriteQuery.fromJSON(object.bulkWriteQueries) }
        : undefined,
    };
  },

  toJSON(message: BulkQuery): unknown {
    const obj: any = {};
    if (message.kind?.$case === "read") {
      obj.read = ReadQuery.toJSON(message.kind.read);
    }
    if (message.kind?.$case === "bulkWriteQueries") {
      obj.bulkWriteQueries = WriteQuery.toJSON(message.kind.bulkWriteQueries);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BulkQuery>, I>>(base?: I): BulkQuery {
    return BulkQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BulkQuery>, I>>(object: I): BulkQuery {
    const message = createBaseBulkQuery();
    if (object.kind?.$case === "read" && object.kind?.read !== undefined && object.kind?.read !== null) {
      message.kind = { $case: "read", read: ReadQuery.fromPartial(object.kind.read) };
    }
    if (
      object.kind?.$case === "bulkWriteQueries" &&
      object.kind?.bulkWriteQueries !== undefined &&
      object.kind?.bulkWriteQueries !== null
    ) {
      message.kind = {
        $case: "bulkWriteQueries",
        bulkWriteQueries: WriteQuery.fromPartial(object.kind.bulkWriteQueries),
      };
    }
    return message;
  },
};

function createBaseQuery(): Query {
  return { kind: undefined };
}

export const Query = {
  encode(message: Query, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.kind?.$case) {
      case "select":
        SelectQuery.encode(message.kind.select, writer.uint32(10).fork()).ldelim();
        break;
      case "insert":
        InsertQuery.encode(message.kind.insert, writer.uint32(18).fork()).ldelim();
        break;
      case "update":
        UpdateQuery.encode(message.kind.update, writer.uint32(26).fork()).ldelim();
        break;
      case "delete":
        DeleteQuery.encode(message.kind.delete, writer.uint32(34).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Query {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = { $case: "select", select: SelectQuery.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kind = { $case: "insert", insert: InsertQuery.decode(reader, reader.uint32()) };
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.kind = { $case: "update", update: UpdateQuery.decode(reader, reader.uint32()) };
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.kind = { $case: "delete", delete: DeleteQuery.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      kind: isSet(object.select)
        ? { $case: "select", select: SelectQuery.fromJSON(object.select) }
        : isSet(object.insert)
        ? { $case: "insert", insert: InsertQuery.fromJSON(object.insert) }
        : isSet(object.update)
        ? { $case: "update", update: UpdateQuery.fromJSON(object.update) }
        : isSet(object.delete)
        ? { $case: "delete", delete: DeleteQuery.fromJSON(object.delete) }
        : undefined,
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    if (message.kind?.$case === "select") {
      obj.select = SelectQuery.toJSON(message.kind.select);
    }
    if (message.kind?.$case === "insert") {
      obj.insert = InsertQuery.toJSON(message.kind.insert);
    }
    if (message.kind?.$case === "update") {
      obj.update = UpdateQuery.toJSON(message.kind.update);
    }
    if (message.kind?.$case === "delete") {
      obj.delete = DeleteQuery.toJSON(message.kind.delete);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Query>, I>>(base?: I): Query {
    return Query.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Query>, I>>(object: I): Query {
    const message = createBaseQuery();
    if (object.kind?.$case === "select" && object.kind?.select !== undefined && object.kind?.select !== null) {
      message.kind = { $case: "select", select: SelectQuery.fromPartial(object.kind.select) };
    }
    if (object.kind?.$case === "insert" && object.kind?.insert !== undefined && object.kind?.insert !== null) {
      message.kind = { $case: "insert", insert: InsertQuery.fromPartial(object.kind.insert) };
    }
    if (object.kind?.$case === "update" && object.kind?.update !== undefined && object.kind?.update !== null) {
      message.kind = { $case: "update", update: UpdateQuery.fromPartial(object.kind.update) };
    }
    if (object.kind?.$case === "delete" && object.kind?.delete !== undefined && object.kind?.delete !== null) {
      message.kind = { $case: "delete", delete: DeleteQuery.fromPartial(object.kind.delete) };
    }
    return message;
  },
};

function createBaseResponse(): Response {
  return { items: [], nextToken: undefined };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      Struct.encode(Struct.wrap(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.nextToken !== undefined) {
      writer.uint32(18).string(message.nextToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.items.push(Struct.unwrap(Struct.decode(reader, reader.uint32())));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      items: globalThis.Array.isArray(object?.items) ? [...object.items] : [],
      nextToken: isSet(object.nextToken) ? globalThis.String(object.nextToken) : undefined,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    if (message.items?.length) {
      obj.items = message.items;
    }
    if (message.nextToken !== undefined) {
      obj.nextToken = message.nextToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
    return Response.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.items = object.items?.map((e) => e) || [];
    message.nextToken = object.nextToken ?? undefined;
    return message;
  },
};

function createBaseQueryRequest(): QueryRequest {
  return { kind: undefined };
}

export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.kind?.$case) {
      case "query":
        Query.encode(message.kind.query, writer.uint32(10).fork()).ldelim();
        break;
      case "queries":
        BulkQuery.encode(message.kind.queries, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = { $case: "query", query: Query.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kind = { $case: "queries", queries: BulkQuery.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRequest {
    return {
      kind: isSet(object.query)
        ? { $case: "query", query: Query.fromJSON(object.query) }
        : isSet(object.queries)
        ? { $case: "queries", queries: BulkQuery.fromJSON(object.queries) }
        : undefined,
    };
  },

  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    if (message.kind?.$case === "query") {
      obj.query = Query.toJSON(message.kind.query);
    }
    if (message.kind?.$case === "queries") {
      obj.queries = BulkQuery.toJSON(message.kind.queries);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequest>, I>>(base?: I): QueryRequest {
    return QueryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryRequest>, I>>(object: I): QueryRequest {
    const message = createBaseQueryRequest();
    if (object.kind?.$case === "query" && object.kind?.query !== undefined && object.kind?.query !== null) {
      message.kind = { $case: "query", query: Query.fromPartial(object.kind.query) };
    }
    if (object.kind?.$case === "queries" && object.kind?.queries !== undefined && object.kind?.queries !== null) {
      message.kind = { $case: "queries", queries: BulkQuery.fromPartial(object.kind.queries) };
    }
    return message;
  },
};

function createBaseResponseError(): ResponseError {
  return { message: "" };
}

export const ResponseError = {
  encode(message: ResponseError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseError {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseError {
    return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
  },

  toJSON(message: ResponseError): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseError>, I>>(base?: I): ResponseError {
    return ResponseError.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResponseError>, I>>(object: I): ResponseError {
    const message = createBaseResponseError();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseQueryResponse(): QueryResponse {
  return { kind: undefined };
}

export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    switch (message.kind?.$case) {
      case "response":
        Response.encode(message.kind.response, writer.uint32(10).fork()).ldelim();
        break;
      case "error":
        ResponseError.encode(message.kind.error, writer.uint32(18).fork()).ldelim();
        break;
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = { $case: "response", response: Response.decode(reader, reader.uint32()) };
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.kind = { $case: "error", error: ResponseError.decode(reader, reader.uint32()) };
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryResponse {
    return {
      kind: isSet(object.response)
        ? { $case: "response", response: Response.fromJSON(object.response) }
        : isSet(object.error)
        ? { $case: "error", error: ResponseError.fromJSON(object.error) }
        : undefined,
    };
  },

  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    if (message.kind?.$case === "response") {
      obj.response = Response.toJSON(message.kind.response);
    }
    if (message.kind?.$case === "error") {
      obj.error = ResponseError.toJSON(message.kind.error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResponse>, I>>(base?: I): QueryResponse {
    return QueryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryResponse>, I>>(object: I): QueryResponse {
    const message = createBaseQueryResponse();
    if (object.kind?.$case === "response" && object.kind?.response !== undefined && object.kind?.response !== null) {
      message.kind = { $case: "response", response: Response.fromPartial(object.kind.response) };
    }
    if (object.kind?.$case === "error" && object.kind?.error !== undefined && object.kind?.error !== null) {
      message.kind = { $case: "error", error: ResponseError.fromPartial(object.kind.error) };
    }
    return message;
  },
};

export type PartiQLQueryService = typeof PartiQLQueryService;
export const PartiQLQueryService = {
  query: {
    path: "/topcoder.dal.partiql.PartiQLQuery/Query",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: QueryRequest) => Buffer.from(QueryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => QueryRequest.decode(value),
    responseSerialize: (value: QueryResponse) => Buffer.from(QueryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => QueryResponse.decode(value),
  },
} as const;

export interface PartiQLQueryServer extends UntypedServiceImplementation {
  query: handleUnaryCall<QueryRequest, QueryResponse>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
