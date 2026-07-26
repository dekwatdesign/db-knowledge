# `health_med_provider_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_provider_type_id | int(11) | NO | PRI | 0 |  |  |
| health_med_provider_type_name | varchar(150) | YES | UNI | NULL |  |  |
| health_med_provider_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_provider_type_name | health_med_provider_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_provider_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "health_med_provider_type_id": 1,
    "health_med_provider_type_name": "ผู้ให้บริการการแพทย์แผนไทยเพื่อการส่งเสริมสุขภาพและป้องกันโรค",
    "health_med_provider_type_code": "01",
    "hos_guid": null
  },
  {
    "health_med_provider_type_id": 2,
    "health_med_provider_type_name": "ผู้ให้บริการการแพทย์แผนไทยเพื่อการบำบัดรักษาและฟื้นฟูสภาพ",
    "health_med_provider_type_code": "02",
    "hos_guid": null
  }
]
```
