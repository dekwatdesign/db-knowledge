# `opitemrece_tpu_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_guid | varchar(38) | NO | PRI |  |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| tpu_code | varchar(6) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | opi_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opi_guid": "{00001038-5E66-4B96-BBA8-B526DDAAA925}",
    "vn": "670123083204",
    "tpu_code": "877107",
    "doctor_code": null,
    "update_datetime": null
  },
  {
    "opi_guid": "{00002D65-D09A-4782-93F9-B239988B51CA}",
    "vn": "670829093607",
    "tpu_code": "644649",
    "doctor_code": null,
    "update_datetime": null
  },
  {
    "opi_guid": "{00007F99-515B-49D5-86BA-DCB69A579A87}",
    "vn": "680827140012",
    "tpu_code": "246721",
    "doctor_code": null,
    "update_datetime": null
  },
  {
    "opi_guid": "{00008224-DD4E-4660-96CE-21C5BE72F887}",
    "vn": "670726130034",
    "tpu_code": "737238",
    "doctor_code": null,
    "update_datetime": null
  },
  {
    "opi_guid": "{0000B242-3FDF-4AB5-9818-78B291DE7742}",
    "vn": "680207100000",
    "tpu_code": "332117",
    "doctor_code": null,
    "update_datetime": null
  },
  {
    "opi_guid": "{0000C75B-F573-4463-88A7-76A83F247EDD}",
    "vn": "670229143000",
    "tpu_code": "779041",
    "doctor_code": null,
    "update_datetime": null
  },
  {
    "opi_guid": "{0001C744-E41E-489B-89D3-4D597E842597}",
    "vn": "670704110002",
    "tpu_code": "877107",
    "doctor_code": null,
    "update_datetime": null
  },
  {
    "opi_guid": "{0001E26A-F801-4F30-AAE2-02C5D8329F3B}",
    "vn": "690105080209",
    "tpu_code": "634033",
    "doctor_code": null,
    "update_datetime": null
  }
]
```
