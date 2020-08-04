module Api
  module V1
    class VideosController < ApplicationController
      # protect_from_forgery with: :null_session

      def index
        videos = Video.all

        render json: VideoSerializer.new(videos, options).serialized_json
      end
      
      def show
        video = Video.find_by(params[:id])
        render json: VideoSerializer.new(video, options).serialized_json
      end
      
      def create
        video = Video.new(video_params)
        
        if video.save
          render json: VideoSerializer.new(video).serialized_json
        else
          render json: { error: video.errors.messages }, status: 422
        end

      end

      def update
        video = Video.find_by(params[:id])
        
        if video.update(video.params)
          render json: VideoSerializer.new(video, options).serialized_json
        else
          render json: { error: video.errors.messages }, status: 422
        end

      end

      def destroy
        video = Video.find_by(params[:id])
        
        if video.destroy
          head :no_content
        else
          render json: { error: video.errors.messages }, status: 422
        end

      end

      private

      def video_params
        params.require(:video)
      end

      def options 
        @options ||= { include: %i[]}
      end
    end
  end
end
