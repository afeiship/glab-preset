import jsw_nx as nx
import gitlab
import os
import click

@click.command()
@click.option('--project_id', prompt='Project ID', help='Project ID', required=True, type=int)
@click.option('--alibabacloud_access_key_id', prompt=True, default=os.environ.get('ALIBABACLOUD_ACCESS_KEY_ID'))
@click.option('--alibabacloud_access_key_secret', prompt=True, default=os.environ.get('ALIBABACLOUD_ACCESS_KEY_SECRET'))
@click.option('--alibabacloud_region_id', prompt=True, default=os.environ.get('ALIBABACLOUD_REGION_ID'))
def cli(**kwargs):
  click.echo(f"Debug mode is {dict(kwargs)}")


if __name__ == '__main__':
  cli(auto_envvar_prefix='GREETER')
