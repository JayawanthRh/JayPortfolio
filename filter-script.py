#!/usr/bin/env python3
import sys

NEW_NAME  = b'Jayawanth Rayak'
NEW_EMAIL = b'rhjayawanth2000@gmail.com'

def commit_callback(commit, metadata):
    commit.author_name = NEW_NAME
    commit.author_email = NEW_EMAIL
    commit.committer_name = NEW_NAME
    commit.committer_email = NEW_EMAIL

# This is required for git-filter-repo
if __name__ == '__main__':
    import git_filter_repo as fr
    args = fr.FilteringOptions.parse_args(['--force'])
    fr.RepoFilter(args, commit_callback=commit_callback).run()
