const CZ_html = "PCFET0NUWVBFIGh0bWw+DQo8aHRtbD4NCjxoZWFkPg0KICAgIDxtZXRhIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSIgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04Ii8+DQogICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPg0KICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQogICAgICAgIC5wYWdlX2xheW91dCB7DQogICAgICAgICAgICBtYXgtd2lkdGg6IDIxLjAwMWNtOw0KICAgICAgICAgICAgbWFyZ2luLXRvcDogMS40OTljbTsNCiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJjbTsNCiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxY207DQogICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFjbTsNCiAgICAgICAgfQ0KDQogICAgICAgIHRhYmxlI2ludm9pY2Ugew0KICAgICAgICAgICAgYm9yZGVyOiAwOw0KICAgICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lOw0KICAgICAgICAgICAgd2lkdGg6IDE5Y207DQogICAgICAgICAgICBtYXJnaW4tbGVmdDogMGNtOw0KICAgICAgICAgICAgbWFyZ2luLXRvcDogMGNtOw0KICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMGNtOw0KICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvOw0KICAgICAgICAgICAgZm9udC1mYW1pbHk6IFRpbWVzIE5ldyBSb21hbjsNCiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDsNCiAgICAgICAgfQ0KDQogICAgICAgICAgICB0YWJsZSNpbnZvaWNlIHRkOm50aC1jaGlsZCgxKSB7DQogICAgICAgICAgICAgICAgd2lkdGg6IDkuMjVjbTsNCiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsNCiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwY207DQogICAgICAgICAgICB9DQoNCiAgICAgICAgICAgIHRhYmxlI2ludm9pY2UgdGQ6bnRoLWNoaWxkKDIpIHsNCiAgICAgICAgICAgICAgICB3aWR0aDogOS43NWNtOw0KICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50Ow0KICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBjbTsNCiAgICAgICAgICAgIH0NCg0KICAgICAgICBAcGFnZSB7DQogICAgICAgIH0NCg0KICAgICAgICB0YWJsZSB7DQogICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOw0KICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7DQogICAgICAgICAgICBlbXB0eS1jZWxsczogc2hvdw0KICAgICAgICB9DQoNCiAgICAgICAgdGQsIHRoIHsNCiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7DQogICAgICAgICAgICBmb250LXNpemU6IDEycHQ7DQogICAgICAgIH0NCg0KICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHsNCiAgICAgICAgICAgIGNsZWFyOiBib3RoOw0KICAgICAgICB9DQoNCiAgICAgICAgb2wsIHVsIHsNCiAgICAgICAgICAgIG1hcmdpbjogMDsNCiAgICAgICAgICAgIHBhZGRpbmc6IDA7DQogICAgICAgIH0NCg0KICAgICAgICBsaSB7DQogICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lOw0KICAgICAgICAgICAgbWFyZ2luOiAwOw0KICAgICAgICAgICAgcGFkZGluZzogMDsNCiAgICAgICAgfQ0KDQogICAgICAgICogew0KICAgICAgICAgICAgbWFyZ2luOiAwOw0KICAgICAgICB9DQoNCiAgICAgICAgI2ludm9pY2UgLmhlYWRlciB7DQogICAgICAgICAgICBmb250LXNpemU6IDEycHQ7DQogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsNCiAgICAgICAgfQ0KDQogICAgICAgICNpbnZvaWNlIHRkLmJsYW5rX3JvdyB7DQogICAgICAgICAgICBoZWlnaHQ6IDEycHggIWltcG9ydGFudDsgLyogb3ZlcndyaXRlcyBhbnkgb3RoZXIgcnVsZXMgKi8NCiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7DQogICAgICAgIH0NCg0KICAgICAgICAjaW52b2ljZSB0ZC50ZXh0bGluZSB7DQogICAgICAgICAgICBmb250LXNpemU6IDEycHQ7DQogICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7DQogICAgICAgIH0NCiAgICA8L3N0eWxlPg0KPC9oZWFkPg0KPGJvZHkgY2xhc3M9InBhZ2VfbGF5b3V0IiBvbmxvYWQ9IndpbmRvdy5wcmludCgpIj4NCiAgICA8dGFibGUgaWQ9Imludm9pY2UiIGNlbGxzcGFjaW5nPSIwIiBjZWxscGFkZGluZz0iMCI+DQogICAgICAgIDx0cj4NCiAgICAgICAgICAgIDx0ZD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0iaGVhZGVyIj4NCiAgICAgICAgICAgICAgICAgICAgRmFrdHVyYSDEjS4ge2ludm9pY2VOb30NCiAgICAgICAgICAgICAgICAgICAgPGJyIC8+emUgZG5lIHtpbnZvaWNlRGF0ZUxvY2FsfQ0KICAgICAgICAgICAgICAgICAgICA8YnIgLz52IHNvdWxhZHUgcyBkb2hvZG91IMSNLiB7Y29udHJhY3ROb30NCiAgICAgICAgICAgICAgICAgICAgPGJyIC8+emUgZG5lIHtjb250cmFjdERhdGVMb2NhbH0NCiAgICAgICAgICAgICAgICA8L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJoZWFkZXIiPg0KICAgICAgICAgICAgICAgICAgICBGYWt0dXJhIE5yIHtpbnZvaWNlTm99DQogICAgICAgICAgICAgICAgICAgIDxiciAvPnoge2ludm9pY2VEYXRlUG9sfQ0KICAgICAgICAgICAgICAgICAgICA8YnIgLz53IG9kbmllc2llbml1IGRvIHVtb3d5IG51bWVyIHtjb250cmFjdE5vfSB6IGRuaWENCiAgICAgICAgICAgICAgICAgICAgPGJyIC8+e2NvbnRyYWN0RGF0ZVBvbH0NCiAgICAgICAgICAgICAgICA8L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICA8L3RyPg0KICAgICAgICA8dHI+DQogICAgICAgICAgICA8dGQgY29sc3Bhbj0iMiIgY2xhc3M9ImJsYW5rX3JvdyI+PC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+Vnlrb25hdmF0ZWw6IDxiPntQRU5hbWVMb2NhbH08L2I+PC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QWRyZXNhOiB7Y291bnRyeUxvY2FsfSwge2FkZHJlc3NFeHRyYUxvY2FsfXtjaXR5TG9jYWx9LCB7cG9zdGFsQ29kZX0sIHtzdHJlZXRMb2NhbH08L3A+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5EScSMOiBDWnt0YXhOdW1iZXJ9PC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+ScSMTzoge3JlZ2lzdHJhdGlvbk51bWJlcn08L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+V3lzdGF3aWFqxIVjeTogPGI+e2NvbXBhbnlUeXBlUG9sfSB7UEVOYW1lUG9sfTwvYj48L3A+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5BZHJlczoge3N0cmVldFBvbH0sIHtwb3N0YWxDb2RlfSwge2NpdHlQb2x9LCB7YWRkcmVzc0V4dHJhUG9sfXtjb3VudHJ5UG9sfTwvcD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dGxpbmUiPk5yLiBwb2RhdGtvd3k6IENae3RheE51bWJlclBvbH08L3A+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5Oci4gcmVqZXN0cmFjeWpueToge3JlZ2lzdHJhdGlvbk51bWJlcn08L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICA8L3RyPg0KICAgICAgICA8dHI+DQogICAgICAgICAgICA8dGQgY29sc3Bhbj0iMiIgY2xhc3M9ImJsYW5rX3JvdyI+PC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QWNjb3VudDo8YnIgLz48Yj57YmFua0FjY291bnROb308L2I+PC9wPg0KICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgICAgIDx0ZD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dGxpbmUiPlJhY2h1bmVrIGJhbmtvd3k6PGJyIC8+PGI+e2JhbmtBY2NvdW50Tm99PC9iPjwvcD4NCiAgICAgICAgICAgIDwvdGQ+DQogICAgICAgIDwvdHI+DQogICAgICAgIDx0cj4NCiAgICAgICAgICAgIDx0ZD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dGxpbmUiPkJlbmVmaWNpYXJ5IG5hbWU6IHtiZW5lZmljaWFyeU5hbWV9PC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QmVuZWZpY2lhcnkgYWRkcmVzczoge2JlbmVmaWNpYXJ5QWRkcmVzc308L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QmVuZWZpY2lhcnkgbmFtZToge2JlbmVmaWNpYXJ5TmFtZX08L3A+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5CZW5lZmljaWFyeSBhZGRyZXNzOiB7YmVuZWZpY2lhcnlBZGRyZXNzfTwvcD4NCiAgICAgICAgICAgIDwvdGQ+DQogICAgICAgIDwvdHI+DQogICAgICAgIDx0cj4NCiAgICAgICAgICAgIDx0ZD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dGxpbmUiPkJhbmsgbmFtZToge2JhbmtOYW1lfTwvcD4NCiAgICAgICAgICAgIDwvdGQ+DQogICAgICAgICAgICA8dGQ+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5CYW5rIG5hbWU6IHtiYW5rTmFtZX08L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICA8L3RyPg0KICAgICAgICA8dHI+DQogICAgICAgICAgICA8dGQ+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5CYW5rIGFkZHJlc3M6IHtiYW5rQWRkcmVzc308L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QmFuayBhZGRyZXNzOiB7YmFua0FkZHJlc3N9PC9wPg0KICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+U1dJRlQvQklDOiB7c3dpZnRDb2RlfTwvcD4NCiAgICAgICAgICAgIDwvdGQ+DQogICAgICAgICAgICA8dGQ+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5TV0lGVC9CSUM6IHtzd2lmdENvZGV9PC9wPg0KICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkIGNvbHNwYW49IjIiIGNsYXNzPSJibGFua19yb3ciPjwvdGQ+DQogICAgICAgIDwvdHI+DQogICAgICAgIDx0ciBzdHlsZT0iZGlzcGxheToge21lZEJhbmtEaXNwbGF5fTsiPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+SW50ZXJtZWRpYXJ5IGJhbms6PC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QmFuayBuYW1lOiB7bWVkQmFua05hbWV9PC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QmFuayBhZGRyZXNzOiB7bWVkQmFua0FkZHJlc3N9PC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+U1dJRlQvQklDOiB7bWVkQmFua1N3aWZ0Q29kZX08L3A+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5BY2MuIEluIGNvcnJlc3BvbmRlbnQgYmFuazoge21lZEJhbmtBY2NOb308L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QmFuayBwb8WbcmVkbmljesSFY3k6PC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QmFuayBuYW1lOiB7bWVkQmFua05hbWV9PC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+QmFuayBhZGRyZXNzOiB7bWVkQmFua0FkZHJlc3N9PC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+U1dJRlQvQklDOiB7bWVkQmFua1N3aWZ0Q29kZX08L3A+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5BY2MuIEluIGNvcnJlc3BvbmRlbnQgYmFuazoge21lZEJhbmtBY2NOb308L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICA8L3RyPg0KICAgICAgICA8dHI+DQogICAgICAgICAgICA8dGQgY29sc3Bhbj0iMiIgY2xhc3M9ImJsYW5rX3JvdyI+PC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+DQogICAgICAgICAgICAgICAgICAgIEN1c3RvbWVyOiAxMjNTb2Z0IHNwLiB6IG8uby4NCiAgICAgICAgICAgICAgICAgICAgPGJyIC8+UGwuIEtpbGnFhHNraWVnbyAyLCAzNS0wMDUgUnplc3rDs3csIFBvbGFuZA0KICAgICAgICAgICAgICAgICAgICA8YnIgLz5SRUdPTjogMzY1OTY2ODA4DQogICAgICAgICAgICAgICAgICAgIDxiciAvPk5JUDogNTE3MDM3ODIxNA0KICAgICAgICAgICAgICAgIDwvcD4NCiAgICAgICAgICAgIDwvdGQ+DQogICAgICAgICAgICA8dGQ+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj4NCiAgICAgICAgICAgICAgICAgICAgV3lzdGF3aW9ubyBuYTogMTIzU29mdCBzcC4geiBvLm8uDQogICAgICAgICAgICAgICAgICAgIDxiciAvPlBsLiBLaWxpxYRza2llZ28gMiwgMzUtMDA1IFJ6ZXN6w7N3LCBQb2xza2ENCiAgICAgICAgICAgICAgICAgICAgPGJyIC8+UkVHT046IDM2NTk2NjgwOA0KICAgICAgICAgICAgICAgICAgICA8YnIgLz5OSVA6IDUxNzAzNzgyMTQNCiAgICAgICAgICAgICAgICA8L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICA8L3RyPg0KICAgICAgICA8dHI+DQogICAgICAgICAgICA8dGQgY29sc3Bhbj0iMiIgY2xhc3M9ImJsYW5rX3JvdyI+PC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+DQogICAgICAgICAgICAgICAgICAgIDxzcGFuPlNsdcW+Ynk6PC9zcGFuPg0KICAgICAgICAgICAgICAgIDwvcD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dGxpbmUiPg0KICAgICAgICAgICAgICAgICAgICBacHJhY292w6Fuw60gc29mdHdhcnUgb2Jkb2LDrQ0KICAgICAgICAgICAgICAgICAgICA8YnIgLz5vZCA8Yj57c3RhcnREYXRlTG9jYWx9PC9iPiBkbyA8Yj57ZW5kRGF0ZUxvY2FsfTwvYj4uDQogICAgICAgICAgICAgICAgICAgIDxiciAvPjxiPsSMw6FzdGthOiB7YW1vdW50TG9jYWx9IHtjdXJyZW5jeX0uPC9iPg0KICAgICAgICAgICAgICAgIDwvcD4NCiAgICAgICAgICAgIDwvdGQ+DQogICAgICAgICAgICA8dGQ+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5Vc8WCdWdpOjwvcD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dGxpbmUiPg0KICAgICAgICAgICAgICAgICAgICBVc8WCdWdpLCBkb3R5Y3rEhWNlIHJvendvanUgb3Byb2dyYW1vd2FuaWENCiAgICAgICAgICAgICAgICAgICAgPGJyIC8+b2QgPGI+e3N0YXJ0RGF0ZVBvbH08L2I+IGRvIDxiPntlbmREYXRlUG9sfTwvYj4uDQogICAgICAgICAgICAgICAgICAgIDxiciAvPjxiPkt3b3RhOiB7YW1vdW50UG9sfSB7Y3VycmVuY3l9LjwvYj4NCiAgICAgICAgICAgICAgICA8L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICA8L3RyPg0KICAgICAgICA8dHI+DQogICAgICAgICAgICA8dGQgY29sc3Bhbj0iMiIgY2xhc3M9ImJsYW5rX3JvdyI+PC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+RG9iYSBzcGxhdG5vc3RpOiBkbyB7dGVybU9mUGFpbWVudExvY2FsfTwvcD4NCiAgICAgICAgICAgIDwvdGQ+DQogICAgICAgICAgICA8dGQ+DQogICAgICAgICAgICAgICAgPHAgY2xhc3M9InRleHRsaW5lIj5UZXJtaW4gcMWCYXRub8WbY2k6IHt0ZXJtT2ZQYWltZW50UG9sfTwvcD4NCiAgICAgICAgICAgIDwvdGQ+DQogICAgICAgIDwvdHI+DQogICAgICAgIDx0cj4NCiAgICAgICAgICAgIDx0ZD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dGxpbmUiPlpwxa9zb2Igw7pocmFkeTogYmFua292bsOtIHDFmWV2b2QuPC9wPg0KICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgICAgIDx0ZD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dGxpbmUiPkZvcm1hIG9wxYJhdHk6IHByemVsZXcuPC9wPg0KICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkIGNvbHNwYW49IjIiIGNsYXNzPSJibGFua19yb3ciPjwvdGQ+DQogICAgICAgIDwvdHI+DQogICAgICAgIDx0cj4NCiAgICAgICAgICAgIDx0ZD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0idGV4dGxpbmUiPg0KICAgICAgICAgICAgICAgICAgICBQbGF0YmEgdiBzb3VsYWR1IHMgdG91dG8gZmFrdHVyb3UgamUgesOhcm92ZcWIIHBvdHZyemVuw61tIHByb3ZlZGVuw60gcHJhY8OtLCBwb3NreXRudXTDvWNoIHNsdcW+ZWIsIGtvbmXEjW7DqWhvIHZ5w7rEjXRvdsOhbsOtIG1lemkgc3RyYW5hbWkgYSB0b2hvLCDFvmUgc3RyYW55IG5lbWFqw60gxb7DoWRuw6kgdnrDoWplbW7DqSBuw6Fyb2t5IGEgbmVuw60gdMWZZWJhIHBvZGVwaXNvdmF0IGRvZGF0ZcSNbsOpIGRva3VtZW50eS4NCiAgICAgICAgICAgICAgICA8L3A+DQogICAgICAgICAgICA8L3RkPg0KICAgICAgICAgICAgPHRkPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+DQogICAgICAgICAgICAgICAgICAgIE9wxYJhdGEgdGVqIGZha3R1cnkgamVzdCBqZWRub2N6ZcWbbmllIHBvcndpZXJkemVuaWVtIG5hZGFuaWEgdXPFgnVnLCBvc3RhdGVjem55Y2ggcm96cmFjaHVua8OzdyBwb21pxJlkenkgU3Ryb25hbWkgb3JheiB0ZWdvLCDFvGUgU3Ryb255IG5pZSBtYWrEhSB3emFqZW1ueWNoIHByZXRlbnNqaSwgaSBuaWUgd3ltYWdhIHBvZHBpc2FuaWEgZG9kYXRrb3d5Y2ggZG9rdW1lbnTDs3cuDQogICAgICAgICAgICAgICAgPC9wPg0KICAgICAgICAgICAgPC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkIGNvbHNwYW49IjIiIGNsYXNzPSJibGFua19yb3ciPjwvdGQ+DQogICAgICAgIDwvdHI+DQogICAgICAgIDx0cj4NCiAgICAgICAgICAgIDx0ZCBjb2xzcGFuPSIyIiBjbGFzcz0iYmxhbmtfcm93Ij48L3RkPg0KICAgICAgICA8L3RyPg0KICAgICAgICA8dHI+DQogICAgICAgICAgICA8dGQgY29sc3Bhbj0iMiIgY2xhc3M9ImJsYW5rX3JvdyI+PC90ZD4NCiAgICAgICAgPC90cj4NCiAgICAgICAgPHRyPg0KICAgICAgICAgICAgPHRkIGNvbHNwYW49IjIiPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJ0ZXh0bGluZSI+DQogICAgICAgICAgICAgICAgICAgIHtzaWduZXJOYW1lTG9jYWx9ICh7c2lnbmVyTmFtZVBvbH0pIMKgIMKgX19fX19fX19fX19fX19fX19fXw0KICAgICAgICAgICAgICAgIDwvcD4NCiAgICAgICAgICAgIDwvdGQ+DQogICAgICAgIDwvdHI+DQogICAgPC90YWJsZT4NCjwvYm9keT4NCjwvaHRtbD4NCg==";