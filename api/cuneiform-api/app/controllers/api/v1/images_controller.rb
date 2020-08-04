module Api
  module V1
    class ImagesController < ApplicationController
      # protect_from_forgery with: :null_session
      def index
        images = Image.all

        render json: ImageSerializer.new(images, options).serialized_json
      end
      
      def show
        image = Image.find_by(params[:id])
        render json: ImageSerializer.new(image, options).serialized_json
      end
      
      def create
        image = Image.new(image_params)
        
        if image.save
          render json: ImageSerializer.new(image).serialized_json
        else
          render json: { error: image.errors.messages }, status: 422
        end

      end

      def update
        image = Image.find_by(params[:id])
        
        if image.update(image.params)
          render json: ImageSerializer.new(image, options).serialized_json
        else
          render json: { error: image.errors.messages }, status: 422
        end

      end

      def destroy
        image = Image.find_by(params[:id])
        
        if image.destroy
          head :no_content
        else
          render json: { error: image.errors.messages }, status: 422
        end

      end

      private

      def image_params
        params.require(:image)
      end

      def options 
        @options ||= { include: %i[]}
      end
    end
  end
end
