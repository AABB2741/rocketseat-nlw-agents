import lib from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

lib.extend(relativeTime);
lib.locale(ptBr);

export const dayjs = lib;
