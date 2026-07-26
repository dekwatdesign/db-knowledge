# `pe_image_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(30) | NO | PRI |  |  |  |
| image_data | longblob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "BODY 1",
    "image_data": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor_code": null
  },
  {
    "name": "BODY 2",
    "image_data": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor_code": null
  },
  {
    "name": "HEAD 1",
    "image_data": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor_code": null
  },
  {
    "name": "HEAD 2",
    "image_data": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor_code": null
  },
  {
    "name": "HEAD 3",
    "image_data": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor_code": null
  },
  {
    "name": "HEAD 4",
    "image_data": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor_code": null
  },
  {
    "name": "HEAD 5",
    "image_data": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor_code": null
  },
  {
    "name": "RIGHT HAND 1",
    "image_data": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null,
    "doctor_code": null
  }
]
```
