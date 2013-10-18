# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

include Nanoc::Helpers::Rendering

def tags
  if @item[:tags].nil?
    '(none)'
  else
    @item[:tags].join(', ')
  end
end
