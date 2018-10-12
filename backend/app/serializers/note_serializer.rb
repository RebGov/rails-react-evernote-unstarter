class NoteSerializer < ActiveModel::Serializer
  attributes :id :title :content :location :images
end
