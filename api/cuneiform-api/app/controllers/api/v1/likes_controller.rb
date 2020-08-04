module Api
  module V1
    class LikesController < ApplicationController
      # protect_from_forgery with: :null_session
      def index
        likes = Like.all

        render json: LikeSerializer.new(likes, options).serialized_json
      end
      
      def show
        like = Like.find_by(params[:id])
        render json: LikeSerializer.new(like, options).serialized_json
      end
      
      def create
        like = Like.new(like_params)
        
        if like.save
          render json: LikeSerializer.new(like).serialized_json
        else
          render json: { error: like.errors.messages }, status: 422
        end

      end

      def update
        like = Like.find_by(params[:id])
        
        if like.update(like.params)
          render json: LikeSerializer.new(like, options).serialized_json
        else
          render json: { error: like.errors.messages }, status: 422
        end

      end

      def destroy
        like = Like.find_by(params[:id])
        
        if like.destroy
          head :no_content
        else
          render json: { error: like.errors.messages }, status: 422
        end

      end

      private

      def like_params
        params.require(:like)
      end

      def options 
        @options ||= { include: %i[]}
      end
    end
  end
end
