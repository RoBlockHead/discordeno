import { DiscordPayload } from "../types/types.ts";
import { eventHandlers } from "../module/client.ts";
import { structures } from "../structures/mod.ts";
import { InteractionCommandPayload } from "../types/types.ts";

export async function handleInternalInteractionsCreate(data: DiscordPayload) {
  if (data.t !== "INTERACTION_CREATE") return;

  const payload = data.d as InteractionCommandPayload;

  eventHandlers.interactionCreate?.(
    {
      ...payload,
      member: await structures.createMember(payload.member, payload.guild_id),
    },
  );
}

export async function handleInternalInteractionsCommandCreate(
  data: DiscordPayload,
) {
  if (data.t !== "APPLICATION_COMMAND_CREATE") return;

  console.log(data);
  eventHandlers.interactionCreate?.(data);
}