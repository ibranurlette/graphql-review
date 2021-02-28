import { queryType, idArg } from "@nexus/schema";
import { data } from "src/data";
import { Bio, Position } from "./index";

export const Query = queryType({
  definition(t) {
    // t.string("name", { resolve: () => "ibra" });
    t.field("bio", {
      type: Bio,
      resolve: () => data.bio,
    });

    t.list.field("positions", {
      type: Position,
      resolve: () => data.positions,
    });

    t.nullable.field("position", {
      type: Position,
      description: "Find a position by its ID",
      args: { id: idArg() },
      resolve: (root, { id }: { id: string }, ctx) =>
        data.positions.find((position) => position.id === id),
    });
  },
});
