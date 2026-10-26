from setuptools import setup, find_packages

setup(
    name='apiverve_weatherseasons',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Weather Seasons calculates astronomical solstice and equinox dates for any target year. It provides exact timestamps and reference timezones for the March and September equinoxes and the June and December solstices.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/weatherseasons?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
