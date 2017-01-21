require "rubygems"

task :publish do
  puts "## Deploying to Github Pages"

  puts "## Generating site"
  system "bundle exec jekyll build"

  puts "## Publishing to gh-page branch"
  system "npm run publish"

  puts "## Publishing finished"
end

task :serve do
  system "bundle exec jekyll serve"
end

task :install do
  system "npm install"
  system "bundle install"
end

task :update do
  system "npm update"
  system "bundle update"
end
