# `opi_usage_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| usage_code | varchar(10) | NO | PRI |  |  |  |
| usage_line1 | varchar(200) | YES |  | NULL |  |  |
| usage_line2 | varchar(200) | YES |  | NULL |  |  |
| usage_line3 | varchar(200) | YES |  | NULL |  |  |
| usage_line4 | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| eng_usage_line1 | varchar(200) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| doctor_use | char(1) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| edqm_route_code | varchar(15) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | usage_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "usage_code": "011",
    "usage_line1": "พ่นจมูกทั้งสองข้าง",
    "usage_line2": null,
    "usage_line3": null,
    "usage_line4": null,
    "hos_guid": "{8873EE81-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_usage_line1": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "edqm_route_code": null
  },
  {
    "usage_code": "012",
    "usage_line1": "พ่นจมูก 1 ข้าง",
    "usage_line2": null,
    "usage_line3": null,
    "usage_line4": null,
    "hos_guid": "{8873F796-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_usage_line1": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "edqm_route_code": null
  },
  {
    "usage_code": "10m",
    "usage_line1": "10 mg. in 0.9% NSS 100 cc",
    "usage_line2": null,
    "usage_line3": null,
    "usage_line4": null,
    "hos_guid": "{8873FD90-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_usage_line1": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "edqm_route_code": null
  },
  {
    "usage_code": "10N",
    "usage_line1": "1000 MG.(20)IN NSS 100 CC",
    "usage_line2": null,
    "usage_line3": null,
    "usage_line4": null,
    "hos_guid": "{8874037A-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_usage_line1": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "edqm_route_code": null
  },
  {
    "usage_code": "1mg",
    "usage_line1": "10 mg. in 0.9% NSS 100 cc",
    "usage_line2": null,
    "usage_line3": null,
    "usage_line4": null,
    "hos_guid": "{8874094B-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_usage_line1": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "edqm_route_code": null
  },
  {
    "usage_code": "200",
    "usage_line1": "50 MG. IV PUSH ช้าๆ",
    "usage_line2": null,
    "usage_line3": null,
    "usage_line4": null,
    "hos_guid": "{88740F25-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_usage_line1": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "edqm_route_code": null
  },
  {
    "usage_code": "201",
    "usage_line1": "50 MG.(2) IV PUSH ช้าๆ",
    "usage_line2": null,
    "usage_line3": null,
    "usage_line4": null,
    "hos_guid": "{88741595-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_usage_line1": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "edqm_route_code": null
  },
  {
    "usage_code": "241",
    "usage_line1": "60 MG.(2.4) IV PUSH ช้าๆ",
    "usage_line2": null,
    "usage_line3": null,
    "usage_line4": null,
    "hos_guid": "{88741B84-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "eng_usage_line1": null,
    "active_status": "Y",
    "doctor_use": null,
    "display_order": null,
    "edqm_route_code": null
  }
]
```
