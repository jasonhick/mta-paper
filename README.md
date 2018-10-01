# MtaPaper

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

HjiE@N2jx22SU

# Automatically generated OpenVPN client config file

# Generated on Tue Mar 20 09:54:19 2018 by openvpnas2

# Note: this config file contains inline private keys

# and therefore should be kept confidential!

# Note: this configuration is user-locked to the username below

# OVPN_ACCESS_SERVER_USERNAME=HJIE

# Define the profile name of this particular configuration file

# OVPN_ACCESS_SERVER_PROFILE=HJIE@openvpn

# OVPN_ACCESS_SERVER_CLI_PREF_ALLOW_WEB_IMPORT=True

# OVPN_ACCESS_SERVER_CLI_PREF_BASIC_CLIENT=False

# OVPN_ACCESS_SERVER_CLI_PREF_ENABLE_CONNECT=True

# OVPN_ACCESS_SERVER_CLI_PREF_ENABLE_XD_PROXY=True

# OVPN_ACCESS_SERVER_WSHOST=openvpn:443

# OVPN_ACCESS_SERVER_WEB_CA_BUNDLE_START

# -----BEGIN CERTIFICATE-----

# MIIDBjCCAe6gAwIBAgIEVw0MqDANBgkqhkiG9w0BAQsFADA8MTowOAYDVQQDDDFP

# cGVuVlBOIFdlYiBDQSAyMDE2LjA0LjEyIDE0OjU2OjQwIFVUQyBvcGVudnBuYXMy

# MB4XDTE2MDQwNTE0NTY0MFoXDTI2MDQxMDE0NTY0MFowPDE6MDgGA1UEAwwxT3Bl

# blZQTiBXZWIgQ0EgMjAxNi4wNC4xMiAxNDo1Njo0MCBVVEMgb3BlbnZwbmFzMjCC

# ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAM1qo42cPm65JuT51mahd0AQ

# q25AcHsAp7HVYQLyFI+5ZOekJPutyO5PLKIOfwJ+e8GbA+xPSeby3lBleIdvovRS

# g3iDuxELJwx/wwHTvEPTaem2TocGQaied8pPO83hz0FlODU4dm6JzZOgMOu4Y3GV

# kuZb6KotY7OatBVWqm7yA/Y5+rtkd9fVIaOfK+vlYcqhuwUdDoiDRgfPpqE1KY/E

# M/QEqp3Qp862D1du9Io6w0lQoaltsjaRfb1jypDSuT6Cjnel4DbS8wkPMeO/JFZu

# 7QR5539z/C5865boyMxHx1Pd/EVcLBdxQy5R+yS9T+lEkpZY1ch6EVpSFRdF3gEC

# AwEAAaMQMA4wDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEAqg6uRzx6

# 6qiYxINEFq8QR6oBu7/D9s2tC+MtF2r4qI1FXQ0g5GGLhAb8PbOqwyab5BaPWkA8

# gdc3N7oOWi9AwgcJnDodGxsykCo3+JVgQjQxAX8eLJ68ToXwR0co3N5YdroOtdRq

# eS0MfDUu99d/LLoFcIBQJUEsXPWmEi0uHoF8NnwwCGnp3CCF4ev9KQgTCIDe9pWF

# pHHVpdIwxKIhFSshPuqqPTmIM/9ZXxJqmozydoLsAr/Cel7C6vVqKdZJVfJfY8Xo

# +FzGCuNJOCEde9NtqE1rxHKt2uHzh+A4dQM2b7O0JPg4zTrtQwTK5kjYOi+ReN/M

# zOuiC0s8ND9lFg==

# -----END CERTIFICATE-----

# OVPN_ACCESS_SERVER_WEB_CA_BUNDLE_STOP

# OVPN_ACCESS_SERVER_IS_OPENVPN_WEB_CA=1

# OVPN_ACCESS_SERVER_ORGANIZATION=OpenVPN Technologies, Inc.

setenv FORWARD_COMPATIBLE 1
client
server-poll-timeout 4
nobind
remote 52.50.249.50 1194 udp
remote 52.50.249.50 1194 udp
remote 52.50.249.50 443 tcp
remote 52.50.249.50 1194 udp
remote 52.50.249.50 1194 udp
remote 52.50.249.50 1194 udp
remote 52.50.249.50 1194 udp
remote 52.50.249.50 1194 udp
dev tun
dev-type tun
ns-cert-type server
setenv opt tls-version-min 1.0 or-highest
reneg-sec 604800
sndbuf 100000
rcvbuf 100000
auth-user-pass

# NOTE: LZO commands are pushed by the Access Server at connect time.

# NOTE: The below line doesn't disable LZO.

comp-lzo no
verb 3
setenv PUSH_PEER_INFO

<ca>
-----BEGIN CERTIFICATE-----
MIICuDCCAaCgAwIBAgIEVw0MpjANBgkqhkiG9w0BAQsFADAVMRMwEQYDVQQDDApP
cGVuVlBOIENBMB4XDTE2MDQwNTE0NTYzOFoXDTI2MDQxMDE0NTYzOFowFTETMBEG
A1UEAwwKT3BlblZQTiBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
AKTu7kJv+xdQCXmlen4O+UrswqkmiOvk4nWmTD84xoBy1L9OMZOg/D5y2DRxeU71
wkXn5masDJljMLMUhO01LstQ9smF/Aw/hSB0haDTpl988+YOhQaxe2pfas/YAjuy
oMHLqPZU8CrpEbRNi4/U+TSEyw2tXssZpD3oeyep0PJo56rdxd6Pm3LgBsbWQs85
RGHfNjS8qIWElP8m9R6CEK3/Ai7ZdMeGlH6CWwCIbojuqWQd0DG0kze+FIyi1Yi/
OTsrq9q4Uc4bGJ+Ov7iokV/7V5NVdn7ptlqsZSxzyIAlEnT6neLY+adocMxnaRjD
19zPaTuQYMXf8Czkto6nMdECAwEAAaMQMA4wDAYDVR0TBAUwAwEB/zANBgkqhkiG
9w0BAQsFAAOCAQEAmHZlTXf4DK/D1tWmT0tPkEurFqxyb4jGfdGRhC9adi8Wf8yi
cFYQOjVcSEtT/yzX4VQY/u+WeUZzg4rMExYvUBwlDhNfi1+Ips+BfhPAR5recay3
vHsQ41zrXNrjSpblQ6FKo9w+b2U7jDnWc7pDjTW8+Ld+OTqYoR5XUUg4vd96V4b6
apH0hcyzspIXZ83vVSW0xGWC4Fs8o78f52DJMlCUW1oSocs/W1GU6vd0FUWnHoFM
JKApCxLunCrN2WCw/yR4lGYYX3Xgfcj05J/Ycv7BbMbtdHfUVrJ0rhViIr2JXGhp
rpUHgCIi/PSI2eZ/YyADsRtxec510PIEtoW7wg==
-----END CERTIFICATE-----
</ca>

<cert>
-----BEGIN CERTIFICATE-----
MIICvzCCAaegAwIBAgIBUDANBgkqhkiG9w0BAQsFADAVMRMwEQYDVQQDDApPcGVu
VlBOIENBMB4XDTE4MDIxMjE0NDUxOVoXDTI4MDIxNzE0NDUxOVowDzENMAsGA1UE
AwwESEpJRTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMyx/24j0OtK
+FFLC+X44FqxvU/2cKL9LPofQZBr3Neg9EtznPQ1YhJS/xE7VjdZ7TAMrbsfUYL6
qsn2c8TS67BL6tMNfijljyar0DINsmOxYXWlfKLuo28BaCWOJSP1YtAgEp6odwJa
goEcWsWbzU+/VDpGxjnCmhkOiJZHOTQQtU/iTcHMLn4fqTc8Cv2Ob+ECPEQ2IDJB
fP1xFi56agF7HKvJdV8CEKD2bQq/PqrLRSAdNBbzjpU0gUXdxPnpJexUg7+s5FlC
IJaPZOuEbSmO69DQU49KNkXlM8ptUc7GKbxViB3Z81xXvt7FAhiTSu0lZGEODbjP
AqA00RmKU88CAwEAAaMgMB4wCQYDVR0TBAIwADARBglghkgBhvhCAQEEBAMCB4Aw
DQYJKoZIhvcNAQELBQADggEBAGwempE9BOZHH1rdF4LXlcsMZVaEVSKnQzgYgPbR
nxAf7MmWJimevqru7Q25pEPBXmPthSmWYu40x+ipeZL9MZdsFGClYAVAc37PaFQd
r8Rm1DDPoost/eYxMu6Y4V6FMmDmKeSBUOGYAlnRccrSgfXihhaZefQrmPF2PWoy
bhklYO7EaVpBU28aUOg5Hk1Azv0+xFGLmXAPJbeVLogub0qfEaMD5ESalD4QcGOn
8qV7NpV6T6x8S7yPtHkfxeBnWEYjDDsRW+3jnN1llMDOyDIhGU2cm1qZQwfP0tkq
HhV7W4e80qCeVhCSISwe8qhWp3mozLYPHjTzztdZldmuYSI=
-----END CERTIFICATE-----
</cert>

key-direction 1

## -----BEGIN RSA SIGNATURE-----

## DIGEST:sha256

## I1sZ7LP537i20XuXb2V5cPKzjs2O8PH6rvRVp3nDwXBcndaFGW

## X0E2KQp//pS/SLYPPbbZ2oiCDaKCzyYM8mB1UaZY6fTcjpU9J9

## QiNVgbCGtJZU61sISan2pYm/Z5UYvDRsvS7NJBCu1wUZesn81L

## cKc8f9LOwXd+IIftV35z3axWda8/SHE8EcNZKgpQogaAuIhLLI

## FK3hgLhVANm6SNZuLrwtHA1GWCTZcyj8s8fK/gh3DuDTnrm0/A

## v54lsrjVeRFe9PvtxxTY2ZeKFh0GE3anqCIvgCYhKvjtXRXEHB

## slN2sf1VierNcwzwm3BF5C4OWkjHefaBBIs/W2eNPQ==

## -----END RSA SIGNATURE-----

## -----BEGIN CERTIFICATE-----

## MIIC7DCCAdSgAwIBAgIEVw0MqTANBgkqhkiG9w0BAQsFADA8MTowOAYDVQQDDDFP

## cGVuVlBOIFdlYiBDQSAyMDE2LjA0LjEyIDE0OjU2OjQwIFVUQyBvcGVudnBuYXMy

## MB4XDTE2MDQwNTE0NTY0MFoXDTI2MDQxMDE0NTY0MFowEjEQMA4GA1UEAwwHb3Bl

## bnZwbjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANb4bBCaPfek5hkC

## KU5uyGnCgru8EGVxBZGUZK3QlqLnY1M/sjequ/BmTKPzCPvtpBbuB5Gsuzery5Lg

## fbDWkigCbmtDvPZtgTr8NzufR5Tq8HThWHAw8kZt1dOQwd5kS64nUkdbAfGeI7D6

## rOG5vapJVsMx8cLxMklorVtgp8lvOyfzI80jSRJ4uNTkXItF1Z1v7AQicxPStwZH

## kjp4+3BdfhJBrD2YCM8w0dXnvqGGQgPZobp55aqmT1PzaUubLi63g24R1bs2/b+l

## VEzfQzAy5jsX3AKNXJQBulT0/HOG4RVcPxl2qETWFJjH13GszHokUrUjlYVk46bm

## +cW1ANUCAwEAAaMgMB4wCQYDVR0TBAIwADARBglghkgBhvhCAQEEBAMCBkAwDQYJ

## KoZIhvcNAQELBQADggEBAIi+l18eGSgQ1Eqgu2Fg/pc36moq7n1iYi3n9dPo+NwZ

## dDaBFo2nPAMCbxNXOSvPpwk+qRrWYYS1nz2anmEBMKA4emEYiFTzUlGiVGwRzBbA

## ZFcqufsGTewGsniLDslwW4vVSWJg/qVc72biAfQgN96pGCYhUci7xkFYlbs/iQvE

## DMO+pOmhe91e9ng0ru1AacnJoHIUBq6Th4Laf3zFnF+4jt0OjEA3FhkKVjueZ0I6

## 97Gx9n66E1WspBHzg/f6uFS3pwkWr6hATgpCH/yYyWzL84C2JQtzC6N6EC9EyM0r

## /z5aELpAAETLvF7V0qruWyTyHOI6FMRaC2HkLQbIarE=

## -----END CERTIFICATE-----

## -----BEGIN CERTIFICATE-----

## MIIDBjCCAe6gAwIBAgIEVw0MqDANBgkqhkiG9w0BAQsFADA8MTowOAYDVQQDDDFP

## cGVuVlBOIFdlYiBDQSAyMDE2LjA0LjEyIDE0OjU2OjQwIFVUQyBvcGVudnBuYXMy

## MB4XDTE2MDQwNTE0NTY0MFoXDTI2MDQxMDE0NTY0MFowPDE6MDgGA1UEAwwxT3Bl

## blZQTiBXZWIgQ0EgMjAxNi4wNC4xMiAxNDo1Njo0MCBVVEMgb3BlbnZwbmFzMjCC

## ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAM1qo42cPm65JuT51mahd0AQ

## q25AcHsAp7HVYQLyFI+5ZOekJPutyO5PLKIOfwJ+e8GbA+xPSeby3lBleIdvovRS

## g3iDuxELJwx/wwHTvEPTaem2TocGQaied8pPO83hz0FlODU4dm6JzZOgMOu4Y3GV

## kuZb6KotY7OatBVWqm7yA/Y5+rtkd9fVIaOfK+vlYcqhuwUdDoiDRgfPpqE1KY/E

## M/QEqp3Qp862D1du9Io6w0lQoaltsjaRfb1jypDSuT6Cjnel4DbS8wkPMeO/JFZu

## 7QR5539z/C5865boyMxHx1Pd/EVcLBdxQy5R+yS9T+lEkpZY1ch6EVpSFRdF3gEC

## AwEAAaMQMA4wDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEAqg6uRzx6

## 6qiYxINEFq8QR6oBu7/D9s2tC+MtF2r4qI1FXQ0g5GGLhAb8PbOqwyab5BaPWkA8

## gdc3N7oOWi9AwgcJnDodGxsykCo3+JVgQjQxAX8eLJ68ToXwR0co3N5YdroOtdRq

## eS0MfDUu99d/LLoFcIBQJUEsXPWmEi0uHoF8NnwwCGnp3CCF4ev9KQgTCIDe9pWF

## pHHVpdIwxKIhFSshPuqqPTmIM/9ZXxJqmozydoLsAr/Cel7C6vVqKdZJVfJfY8Xo

## +FzGCuNJOCEde9NtqE1rxHKt2uHzh+A4dQM2b7O0JPg4zTrtQwTK5kjYOi+ReN/M

## zOuiC0s8ND9lFg==

## -----END CERTIFICATE-----
