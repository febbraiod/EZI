class NoteSerializer < ActiveModel::Serializer
  attributes :id, :user, :content

  def user
    User.find(object.user_id).name
  end

end
