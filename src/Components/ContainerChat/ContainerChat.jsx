import Chat from "../Chat/Chat";
import DownloadWp from "../DownloadWp/DownloadWp";
import "./ContainerChat.css";
function ContainerChat({ id }) {

  return (
    <section className={id ? "container-chat container-chat-active" : "container-chat"}>
      {
        id ? <Chat /> : <DownloadWp />
      }

    </section>
  );
}

export default ContainerChat;