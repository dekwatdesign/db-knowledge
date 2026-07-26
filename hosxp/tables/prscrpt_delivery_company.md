# `prscrpt_delivery_company`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_delivery_company_id | int(11) | NO | PRI | 0 |  |  |
| prscrpt_delivery_company_name | varchar(100) | YES |  | NULL |  |  |
| service_host | varchar(255) | YES |  | NULL |  |  |
| used_master_token | char(1) | YES |  | NULL |  |  |
| master_token | longtext | YES |  | NULL |  |  |
| token_one_time_used | char(1) | YES |  | NULL |  |  |
| user_token | varchar(255) | YES |  | NULL |  |  |
| password_token | varchar(255) | YES |  | NULL |  |  |
| authen_path | varchar(255) | YES |  | NULL |  |  |
| request_tracking_path | varchar(255) | YES |  | NULL |  |  |
| check_tracking_path | varchar(255) | YES |  | NULL |  |  |
| get_label_path | varchar(255) | YES |  | NULL |  |  |
| company_code | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | prscrpt_delivery_company_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "prscrpt_delivery_company_id": 1,
    "prscrpt_delivery_company_name": "บริษัท ไปรษณีย์ไทย จำกัด",
    "service_host": "https://trackapi.thailandpost.co.th/post/api/v1",
    "used_master_token": "Y",
    "master_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IkF1dGhvcml6YXRpb24iLCJleHAiOjE3NDY4NzAwODUsInJvbCI6WyJST0xFX1VTRVIiXSwiZCpzaWciOnsicCI6InpXNzB4IiwicyI6bnVsbCwidSI6IjliYTcyZDE5OTA0NjA5MGZiMjgwMjdjNmFhYWEwZWM2IiwiZiI6InhzeiM5In19.6UXp6o3DwjrGJgO2-tG6KErtrSMTlfkP4nUv7v0m1a-rdZTq2hG1pskm_vVvm18jaeAdgyx98_M_0GwY-eEbRw",
    "token_one_time_used": "N",
    "user_token": "0819772640",
    "password_token": "Yc@p12251",
    "authen_path": "/authenticate/token",
    "request_tracking_path": "/track",
    "check_tracking_path": "/receipt/track",
    "get_label_path": "/track/batch",
    "company_code": null
  },
  {
    "prscrpt_delivery_company_id": 6,
    "prscrpt_delivery_company_name": "Kerry Express",
    "service_host": "https://scgyamatodev.flare.works",
    "used_master_token": "",
    "master_token": "",
    "token_one_time_used": "",
    "user_token": "",
    "password_token": "",
    "authen_path": "/api/authentication",
    "request_tracking_path": "/api/orderwithouttrackingnumber",
    "check_tracking_path": "/api/gethistoricalstatusbytrackingnumber",
    "get_label_path": "/api/getMobileLabel",
    "company_code": null
  },
  {
    "prscrpt_delivery_company_id": 5,
    "prscrpt_delivery_company_name": "ไปรษณีย์ไทย (EMS) X",
    "service_host": "https://scgyamatodev.flare.works",
    "used_master_token": "",
    "master_token": "",
    "token_one_time_used": "",
    "user_token": "",
    "password_token": "",
    "authen_path": "/api/authentication",
    "request_tracking_path": "/api/orderwithouttrackingnumber",
    "check_tracking_path": "/api/gethistoricalstatusbytrackingnumber",
    "get_label_path": "/api/getMobileLabel",
    "company_code": null
  },
  {
    "prscrpt_delivery_company_id": 4,
    "prscrpt_delivery_company_name": "แฟลซโปร DD",
    "service_host": "https://scgyamatodev.flare.works",
    "used_master_token": "",
    "master_token": "",
    "token_one_time_used": "",
    "user_token": "",
    "password_token": "",
    "authen_path": "/api/authentication",
    "request_tracking_path": "/api/orderwithouttrackingnumber",
    "check_tracking_path": "/api/gethistoricalstatusbytrackingnumber",
    "get_label_path": "/api/getMobileLabel",
    "company_code": null
  },
  {
    "prscrpt_delivery_company_id": 99,
    "prscrpt_delivery_company_name": "Health Rider",
    "service_host": "",
    "used_master_token": "",
    "master_token": "",
    "token_one_time_used": "",
    "user_token": "",
    "password_token": "",
    "authen_path": "",
    "request_tracking_path": "",
    "check_tracking_path": "",
    "get_label_path": "",
    "company_code": null
  },
  {
    "prscrpt_delivery_company_id": 2,
    "prscrpt_delivery_company_name": "SCG Express",
    "service_host": "",
    "used_master_token": "",
    "master_token": "",
    "token_one_time_used": "",
    "user_token": "",
    "password_token": "",
    "authen_path": "",
    "request_tracking_path": "",
    "check_tracking_path": "",
    "get_label_path": "",
    "company_code": null
  },
  {
    "prscrpt_delivery_company_id": 3,
    "prscrpt_delivery_company_name": "Dowell Rider",
    "service_host": "https://scgyamatodev.flare.works",
    "used_master_token": "N",
    "master_token": "",
    "token_one_time_used": "Y",
    "user_token": "",
    "password_token": "",
    "authen_path": "/api/authentication",
    "request_tracking_path": "/api/orderwithouttrackingnumber",
    "check_tracking_path": "/api/gethistoricalstatusbytrackingnumber",
    "get_label_path": "/api/getMobileLabel",
    "company_code": null
  },
  {
    "prscrpt_delivery_company_id": 7,
    "prscrpt_delivery_company_name": "Flash Pro B",
    "service_host": "",
    "used_master_token": "",
    "master_token": "",
    "token_one_time_used": "",
    "user_token": "",
    "password_token": "",
    "authen_path": "",
    "request_tracking_path": "",
    "check_tracking_path": "",
    "get_label_path": "",
    "company_code": null
  }
]
```
