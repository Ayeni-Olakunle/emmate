import React from "react";
import { IoGiftSharp } from "react-icons/io5";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { FaDownload } from "react-icons/fa6";

export default function Features() {
  return (
    <section className="max-w-[55rem] mx-auto px-4">
      <div className="row row-padded row-bordered row-centered p-l-md p-r-md">
        <div className="col-sm-12">
          <div className="p-[20px] flex justify-center items-center flex-col gap-[10px]">
            <h2 className="text-xl text-[#434343]">
              <strong>YouTube Video Downloader</strong>
            </h2>
            <p className="leading-[27px] text-[gray] text-center">
              Y2mate allows you to convert & download video from YouTube,
              Facebook, Video, Dailymotion, Youku, etc. to Mp3, Mp4 in HD
              quality. Y2mate supports downloading all video formats such as:
              MP4, M4V, 3GP, WMV, FLV, MO, MP3, WEBM, etc. You can easily
              download for free thousands of videos from YouTube and other
              websites.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_1fr] gap-[20px] mx-[0] my-[20px] sm:grid-cols-[1fr]">
        <div className="mx-[auto] my-[0] flex justify-start items-start flex-col gap-[10px] sm:w-full">
          <h3 className="text-[#434343]">
            <strong>Instructions</strong>
          </h3>
          <p className="text-[gray]">
            1. Search by name or directly paste the link of video you want to
            convert
          </p>
          <p className="text-[gray]">
            2. Click &quot;Start&quot; button to begin converting process
          </p>
          <p className="text-[gray]">
            3. Select the video/audio format you want to download, then click
            &quot;Download&quot; button
          </p>
        </div>

        <div className="mx-[auto] my-[0] flex justify-start items-start flex-col gap-[10px] sm:w-full">
          <h3 className="text-[#434343]">
            <strong>Features</strong>
          </h3>
          <p className="text-[gray]">• Unlimited downloads and always free</p>
          <p className="text-[gray]">• High-speed video converter</p>
          <p className="text-[gray]">• No registration required</p>
          <p className="text-[gray]">• Support downloading with all formats</p>
        </div>
      </div>
      <div className="bg-[#bfbfbf] w-full h-[1px] mb-[50px] mt-[40px]"></div>

      <div className="grid grid-cols-[1fr_1fr_1fr] mb-[40px] sm:grid-cols-[1fr] sm:gap-[50px]">
        <div className="col-sm-4">
          <span
            className="flex justify-center items-center text-[50px] mb-[10px] text-[#3f79fa]"
            aria-hidden="true"
          >
            <IoGiftSharp />
          </span>
          <h3 className="text-[#3f79fa] text-[1.2rem] text-center">
            <strong>Free Download</strong>
          </h3>
          <p className="text-[15px] text-[gray] text-center">
            Unlimited conversion and free download.
          </p>
        </div>

        <div className="col-sm-4">
          <span
            className="flex justify-center items-center text-[50px] mb-[10px] text-[#3f79fa]"
            aria-hidden="true"
          >
            <LiaPhotoVideoSolid />
          </span>
          <h3 className="text-[#3f79fa] text-[1.2rem] text-center">
            <strong>Video & Audio</strong>
          </h3>
          <p className="text-[15px] text-[gray] text-center">
            Directly Download Video & Music.
          </p>
        </div>

        <div className="col-sm-4">
          <span
            className="flex justify-center items-center text-[50px] mb-[10px] text-[#3f79fa]"
            aria-hidden="true"
          >
            <FaDownload />
          </span>
          <h3 className="text-[#3f79fa] text-[1.2rem] text-center">
            <strong>Easy Download</strong>
          </h3>
          <p className="text-[15px] text-[gray] text-center">
            Fully compatible with all browsers.
          </p>
        </div>
      </div>

      <div className="bg-[#bfbfbf] w-full h-[1px] mb-[50px] mt-[40px]"></div>
    </section>
  );
}
