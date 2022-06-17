import jsw_nx as nx
import gitlab
import os

# private token or personal token authentication (GitLab.com)
gl = gitlab.Gitlab(url="https://git.saybot.net/",
                   private_token=os.getenv('GITLAB_TOKEN'))

prj = gl.projects.get(2563) # 2563为项目id
