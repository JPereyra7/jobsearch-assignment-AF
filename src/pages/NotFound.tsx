import { ErrorPageStatusCodes } from "@digi/arbetsformedlingen";
import {
  DigiLinkInternal,
  DigiNotificationErrorPage,
} from "@digi/arbetsformedlingen-react";

export const NotFound = () => {
  return (
    <DigiNotificationErrorPage
      afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}
    >
      <ul slot="links">
        <li>
          <DigiLinkInternal afHref="/" afVariation="small">
            Till startsidan
          </DigiLinkInternal>
        </li>
      </ul>
    </DigiNotificationErrorPage>
  );
};
