"use client";

import React, { useState } from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { FaPhotoVideo } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import axios from "axios";

interface youTube {
  thumb: string;
  title: string;
  audio: string;
  video: string;
  video_hd: string;
}

export default function FormInput() {
  const [data, setData] = useState<youTube>();
  const [url, setUrl] = useState("");
  const [load, setLoad] = useState(false);
  const [type, setType] = useState("Video");

  const fetchData = async (e: any) => {
    e.preventDefault();
    setLoad(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BaseURL}/download/youtube?url=${url}`
      );
      console.log(response.data.data);
      setData(response.data.data);
      setLoad(false);
    } catch (error) {
      console.error(error);
      setLoad(false);
    }
  };

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
                  onSubmit={fetchData}
                >
                  <div className="w-4/5 flex justify-between items-center border-[5px] border-solid border-[#407bff] rounded-[2px] sm:w-full">
                    <input
                      className="w-full p-[15px] outline-[0]"
                      id="txt-url"
                      name="query"
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                      placeholder="Search or paste link here..."
                    />

                    <button
                      className="bg-[#407bff] px-[40px] py-[15px] text-[white]"
                      type="submit"
                    >
                      Start
                    </button>
                  </div>

                  {load && (
                    <img
                      id="loading_img"
                      src="//www.y2mate.com/themes/images/loading.gif"
                    />
                  )}
                </form>
              </div>
              <div id="ads_spot1"> </div>

              {data && (
                <div className="w-full">
                  <div className="flex justify-between items-start gap-[20px] sm:flex-col">
                    <div className="w-2/5 md:w-full">
                      <div className="thumbnail cover">
                        <img
                          src={data.thumb}
                          alt="YouTube Downloader thumbnail"
                        />
                        <div className="caption text-left">
                          <b>{data.title}</b>
                        </div>
                      </div>
                    </div>

                    <div className="w-3/5 md:w-full">
                      <div className="flex">
                        <button
                          className={`flex gap-[10px] justify-start items-center ${
                            type === "Video"
                              ? "text-[white] bg-[#407bff]"
                              : "text-[#407bff] bg-[white]"
                          }  px-[20px] py-[10px]`}
                          onClick={() => setType("Video")}
                        >
                          <FaPhotoVideo /> Video
                        </button>
                        <button
                          className={`flex gap-[10px] justify-start items-center ${
                            type === "Music"
                              ? "text-[white] bg-[#407bff]"
                              : "text-[#407bff] bg-[white]"
                          }  px-[20px] py-[10px]`}
                          onClick={() => setType("Music")}
                        >
                          <IoIosMusicalNotes /> Music
                        </button>
                      </div>

                      <div className="tab-content">
                        <div id="mp4">
                          {type === "Music" && (
                            <table className="w-full">
                              <tbody>
                                <tr>
                                  <td className="p-[10px] text-[15px] text-[gray]">
                                    360p
                                  </td>
                                  <td className="text-center text-[13px] text-[gray]">
                                    Null
                                  </td>
                                  <td className="flex justify-center px-[0] py-[9px]">
                                    <a
                                      href={data.audio}
                                      className="flex gap-[10px] items-center bg-[#407bff] px-[10px] py-[5px] text-[white] rounded-[5px] text-[15px]"
                                    >
                                      <IoMdCloudDownload />
                                      Download
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          )}

                          {type === "Video" && (
                            <table className="w-full">
                              <tbody>
                                <tr>
                                  <td className="p-[10px] text-[15px] text-[gray]">
                                    360p
                                  </td>
                                  <td className="text-center text-[13px] text-[gray]">
                                    Null
                                  </td>
                                  <td className="flex justify-center px-[0] py-[9px]">
                                    <a
                                      href={data.video}
                                      className="flex gap-[10px] items-center bg-[#407bff] px-[10px] py-[5px] text-[white] rounded-[5px] text-[15px]"
                                    >
                                      <IoMdCloudDownload />
                                      Download
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-[10px] text-[15px] text-[gray]">
                                    720p
                                  </td>
                                  <td className="text-center text-[13px] text-[gray]">
                                    Null
                                  </td>
                                  <td className="flex justify-center px-[0] py-[9px]">
                                    <a
                                      href={data.video_hd}
                                      className="flex gap-[10px] items-center bg-[#407bff] px-[10px] py-[5px] text-[white] rounded-[5px] text-[15px]"
                                    >
                                      <IoMdCloudDownload />
                                      Download
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
