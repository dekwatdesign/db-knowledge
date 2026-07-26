# `dw_hospcode_allow`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hospcode | varchar(9) | NO | PRI |  |  |  |
| force_clean_data | char(1) | YES |  | NULL |  |  |
| secret_key | varchar(200) | YES |  | NULL |  |  |
| license_code | text | YES |  | NULL |  |  |
| wait_minute | int(11) | YES |  | NULL |  |  |
| complete_percent | double(15,3) | YES |  | NULL |  |  |
| bed_count | int(11) | YES |  | NULL |  |  |
| etl_computer_name | varchar(50) | YES |  | NULL |  |  |
| last_etl_active | datetime | YES |  | NULL |  |  |
| current_table_name | varchar(150) | YES |  | NULL |  |  |
| officeid_506 | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hospcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hospcode": "08227",
    "force_clean_data": null,
    "secret_key": null,
    "license_code": null,
    "wait_minute": null,
    "complete_percent": null,
    "bed_count": null,
    "etl_computer_name": null,
    "last_etl_active": null,
    "current_table_name": null,
    "officeid_506": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hospcode": "08277",
    "force_clean_data": null,
    "secret_key": null,
    "license_code": null,
    "wait_minute": null,
    "complete_percent": null,
    "bed_count": null,
    "etl_computer_name": null,
    "last_etl_active": null,
    "current_table_name": null,
    "officeid_506": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hospcode": "11290",
    "force_clean_data": null,
    "secret_key": null,
    "license_code": null,
    "wait_minute": null,
    "complete_percent": null,
    "bed_count": null,
    "etl_computer_name": null,
    "last_etl_active": null,
    "current_table_name": null,
    "officeid_506": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hospcode": "11291",
    "force_clean_data": null,
    "secret_key": null,
    "license_code": null,
    "wait_minute": null,
    "complete_percent": null,
    "bed_count": null,
    "etl_computer_name": null,
    "last_etl_active": null,
    "current_table_name": null,
    "officeid_506": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hospcode": "11292",
    "force_clean_data": null,
    "secret_key": null,
    "license_code": null,
    "wait_minute": null,
    "complete_percent": null,
    "bed_count": null,
    "etl_computer_name": null,
    "last_etl_active": null,
    "current_table_name": null,
    "officeid_506": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hospcode": "11293",
    "force_clean_data": null,
    "secret_key": null,
    "license_code": null,
    "wait_minute": null,
    "complete_percent": null,
    "bed_count": null,
    "etl_computer_name": null,
    "last_etl_active": null,
    "current_table_name": null,
    "officeid_506": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hospcode": "11294",
    "force_clean_data": null,
    "secret_key": "",
    "license_code": null,
    "wait_minute": null,
    "complete_percent": null,
    "bed_count": null,
    "etl_computer_name": null,
    "last_etl_active": null,
    "current_table_name": null,
    "officeid_506": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hospcode": "11295",
    "force_clean_data": null,
    "secret_key": null,
    "license_code": null,
    "wait_minute": null,
    "complete_percent": null,
    "bed_count": null,
    "etl_computer_name": null,
    "last_etl_active": null,
    "current_table_name": null,
    "officeid_506": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
