type ServiceErrorContext = Record<string, unknown>;

export function createTraceId(prefix: string) {
  return `${prefix}-${crypto.randomUUID()}`;
}

export function buildServiceErrorMessage(action: string, traceId: string) {
  return `No se pudo ${action}. Traza: ${traceId}`;
}

export function reportServiceError(
  operation: string,
  error: unknown,
  context: ServiceErrorContext,
) {
  if (!import.meta.env.DEV) {
    return;
  }

  console.error(`[service:${operation}]`, {
    error,
    ...context,
  });
}
