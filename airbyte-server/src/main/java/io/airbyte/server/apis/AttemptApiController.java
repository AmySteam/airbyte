/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.server.apis;

import io.airbyte.api.generated.AttemptApi;
import io.airbyte.api.model.generated.InternalOperationResult;
import io.airbyte.api.model.generated.SaveStatsRequestBody;
import io.airbyte.api.model.generated.SetWorkflowInAttemptRequestBody;
import io.airbyte.server.handlers.AttemptHandler;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Post;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import lombok.extern.slf4j.Slf4j;

@Controller("/api/v1/attempt/")
@Slf4j
public class AttemptApiController implements AttemptApi {

  private final AttemptHandler attemptHandler;

  public AttemptApiController(final AttemptHandler attemptHandler) {
    this.attemptHandler = attemptHandler;
  }

  @Override
  @Post(uri = "/save_stats",
      processes = MediaType.APPLICATION_JSON)
  public InternalOperationResult saveStats(final SaveStatsRequestBody saveStatsRequestBody) {
    log.error("Tessssttttttttt");

    throw new UnsupportedOperationException();
  }

  /*
   * @Post(uri = "/set_workflow_in_attempt", produces = MediaType.APPLICATION_JSON, consumes =
   * MediaType.APPLICATION_JSON)
   */
  @Override
  @Post(uri = "/set_workflow_in_attempt",
      processes = MediaType.APPLICATION_JSON)
  public InternalOperationResult setWorkflowInAttempt(@Body final SetWorkflowInAttemptRequestBody requestBody) {
    log.error("Tessssttttttttt 22");

    return ApiHelper.execute(() -> attemptHandler.setWorkflowInAttempt(requestBody));
  }

}
