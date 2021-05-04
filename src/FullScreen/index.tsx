import FullScreenComponent from "./FullScreen";
import FullScreenContent from "./FullScreenContent";
import FullScreenHeader from "./FullScreenHeader";

type FullScreenType = typeof FullScreenComponent;

interface FullScreen extends FullScreenType {
  Header: typeof FullScreenHeader;
  Content: typeof FullScreenContent;
}

const FullScreen = FullScreenComponent as FullScreen;
FullScreen.Header = FullScreenHeader;
FullScreen.Content = FullScreenContent;

export type { FullScreenProps } from "./FullScreen";
export default FullScreen;
