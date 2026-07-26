# `opi_dose_usage_unit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_dose_usage_unit_id | int(11) | NO | PRI | 0 |  |  |
| usage_unit_code | varchar(10) | YES | MUL | NULL |  |  |
| dose | double(15,3) | YES | MUL | NULL |  |  |
| dose_usage_unit_name | varchar(150) | YES |  | NULL |  |  |
| real_dose | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| capacity_qty | double(15,3) | YES |  | NULL |  |  |
| eng_dose_usage_unit_name | varchar(200) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | usage_unit_code | yes | 1 |
| ix_unique | dose | yes | 2 |
| ix_unique_index | dose | yes | 1 |
| ix_unique_index | usage_unit_code | yes | 2 |
| PRIMARY | opi_dose_usage_unit_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opi_dose_usage_unit_id": 1,
    "usage_unit_code": "cc",
    "dose": 2.5,
    "dose_usage_unit_name": "ครึ่งช้อนชา",
    "real_dose": null,
    "hos_guid": "{873F8E64-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_dose_usage_unit_name": null,
    "active_status": "Y"
  },
  {
    "opi_dose_usage_unit_id": 2,
    "usage_unit_code": "tab",
    "dose": 0.5,
    "dose_usage_unit_name": "ครึ่งเม็ด",
    "real_dose": null,
    "hos_guid": "{873F95CA-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_dose_usage_unit_name": null,
    "active_status": "Y"
  },
  {
    "opi_dose_usage_unit_id": 3,
    "usage_unit_code": "cc",
    "dose": 5.0,
    "dose_usage_unit_name": "1 ช้อนชา",
    "real_dose": null,
    "hos_guid": "{873F9B0F-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_dose_usage_unit_name": null,
    "active_status": "Y"
  },
  {
    "opi_dose_usage_unit_id": 4,
    "usage_unit_code": "cc",
    "dose": 15.0,
    "dose_usage_unit_name": "1 ช้อนโต๊ะ",
    "real_dose": null,
    "hos_guid": "{873FA031-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_dose_usage_unit_name": null,
    "active_status": "Y"
  },
  {
    "opi_dose_usage_unit_id": 5,
    "usage_unit_code": "tab",
    "dose": 1.5,
    "dose_usage_unit_name": "1 เม็ดครึ่ง",
    "real_dose": null,
    "hos_guid": "{873FA53A-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_dose_usage_unit_name": null,
    "active_status": "Y"
  },
  {
    "opi_dose_usage_unit_id": 6,
    "usage_unit_code": "tab",
    "dose": 2.5,
    "dose_usage_unit_name": "2 เม็ดครึ่ง",
    "real_dose": null,
    "hos_guid": "{873FAA33-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_dose_usage_unit_name": null,
    "active_status": "Y"
  },
  {
    "opi_dose_usage_unit_id": 7,
    "usage_unit_code": "tab",
    "dose": 3.5,
    "dose_usage_unit_name": "3 เม็ดครึ่ง",
    "real_dose": null,
    "hos_guid": "{8741AA73-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_dose_usage_unit_name": null,
    "active_status": "Y"
  },
  {
    "opi_dose_usage_unit_id": 8,
    "usage_unit_code": "cc",
    "dose": 10.0,
    "dose_usage_unit_name": "2 ช้อนชา",
    "real_dose": null,
    "hos_guid": "{8741B1CA-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "capacity_qty": null,
    "eng_dose_usage_unit_name": null,
    "active_status": "Y"
  }
]
```
