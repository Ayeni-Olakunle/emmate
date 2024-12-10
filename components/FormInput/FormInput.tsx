import React from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { FaPhotoVideo } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";

interface DownloadOption {
  format: string;
  quality: string;
  size: string;
  action: () => void;
}

export default function FormInput() {
  const handleDownload = (type: string, id: string) => {
    console.log(`Starting download for type: ${type}, id: ${id}`);
  };

  const videoOptions: DownloadOption[] = [
    {
      format: "MP4",
      quality: "auto quality",
      size: "N/A",
      action: () => handleDownload("mp4", "someId1"),
    },
    {
      format: "360p (.mp4)",
      quality: "360p",
      size: "N/A",
      action: () => handleDownload("mp4", "someId2"),
    },
    {
      format: "720p (.mp4)",
      quality: "720p",
      size: "36.3 MB",
      action: () => handleDownload("mp4", "someId3"),
    },
    {
      format: "1080p (.mp4)",
      quality: "1080p HD",
      size: "62.8 MB",
      action: () => handleDownload("mp4", "someId4"),
    },
  ];

  const audioOptions: DownloadOption[] = [
    {
      format: "MP3",
      quality: "128kbps",
      size: "2.7 MB",
      action: () => handleDownload("mp3", "someAudioId"),
    },
  ];
  return (
    <section>
      <div className="max-w-[55rem] mx-auto px-4">
        <div className="bg-[white] border-[2px] border-solid border-[#e5e5e5] flex justify-center items-center p-[25px] rounded-[5px]">
          <div className="w-full">
            <div className="flex justify-center items-center flex-col gap-[20px]">
              <h1 className="text-[1.7rem] font-bold sm:text-[27px] sm:text-center">
                Download Video and Audio from YouTube
              </h1>

              <div className="w-full">
                <form
                  className="w-full flex justify-center items-center flex-col gap-[10px]"
                  action="/en948"
                  id="search-form"
                  name="mc-embedded-subscribe-form"
                >
                  <div className="w-4/5 flex justify-between items-center border-[5px] border-solid border-[#407bff] rounded-[2px] sm:w-full">
                    <input
                      className="w-full p-[15px] outline-[0]"
                      id="txt-url"
                      name="query"
                      type="text"
                      placeholder="Search or paste link here..."
                    />

                    <button
                      title="Start"
                      type="button"
                      value="Start"
                      aria-label="Start"
                      id="btn-submit"
                      className="bg-[#407bff] px-[40px] py-[15px] text-[white]"
                    >
                      <span className="hidden-xs">Start </span>{" "}
                      <span className="glyphicon glyphicon-arrow-right"></span>
                    </button>
                  </div>
                  <div></div>

                  {/* <p className="small">
                    By using our service you are accepting our{" "}
                    <a
                      className="active"
                      href="/en948/terms-of-service"
                      target="_blank"
                    >
                      Terms of Use
                    </a>
                    .{" "}
                  </p> */}

                  {/* <img
                    id="loading_img"
                    src="//www.y2mate.com/themes/images/loading.gif"
                  /> */}
                </form>
              </div>
              <div id="ads_spot1"> </div>

              <div className="w-full">
                <div className="flex justify-between items-start gap-[20px] sm:flex-col">
                  <div className="w-2/5 md:w-full">
                    <div className="thumbnail cover">
                      <img
                        src="https://i.ytimg.com/vi/5yZ85Jt5jTI/0.jpg"
                        alt="YouTube Downloader thumbnail"
                      />
                      <div className="caption text-left">
                        <b>Pastor Remote is high here 🤣🤣🤣</b>
                      </div>
                    </div>
                  </div>

                  <div className="w-3/5 md:w-full">
                    <div className="flex">
                      <button className="flex gap-[10px] justify-start items-center bg-[#407bff] px-[20px] py-[10px] text-[white]">
                        <FaPhotoVideo /> Video
                      </button>
                      <button className="flex gap-[10px] justify-start items-center bg-[white] px-[20px] py-[10px] text-[#407bff]">
                        <IoIosMusicalNotes /> Music
                      </button>
                    </div>

                    <div className="tab-content">
                      {/* Video Tab */}
                      <div
                        // className="border-[1px] border-solid border-[#e4e4e4]"
                        id="mp4"
                      >
                        <table className="w-full">
                          <tbody>
                            {videoOptions.map((option, index) => (
                              <tr
                                key={index}
                                // className="[border-bottom:1px_solid_#e4e4e4]"
                              >
                                <td className="p-[10px] text-[15px] text-[gray]">
                                  {option.quality}
                                </td>
                                <td className="text-center text-[13px] text-[gray]">
                                  {option.size}
                                </td>
                                <td className="flex justify-center px-[0] py-[9px]">
                                  <button
                                    className="flex gap-[10px] items-center bg-[#407bff] px-[10px] py-[5px] text-[white] rounded-[5px] text-[15px]"
                                    // onClick={option.action}
                                  >
                                    <IoMdCloudDownload />
                                    Download
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
