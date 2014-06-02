Mailprotector Public Site
=======

The public website for Mailprotector.

Deployment
---------------

The deployment is managed through Capistrano. There is a deployer user and staff group on the server that everything runs inside of. To deploy to a new server run:

  cap deploy:setup
  cap deploy:cold

To update existing servers run:

  cap deploy


Notes
---------------

