# `entity_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| entity_name | varchar(50) | NO | PRI |  |  |  |
| code | varchar(5) | NO | PRI |  |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code | code | no | 1 |
| entity_name | entity_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | entity_name | yes | 1 |
| PRIMARY | code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "entity_name": "surveil_member.complication",
    "code": "221",
    "name": "Pneumonia",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "surveil_member.complication",
    "code": "222",
    "name": "Diarrhoea",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "surveil_member.complication",
    "code": "223",
    "name": "Encephalitis",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "surveil_member.complication",
    "code": "224",
    "name": "Otitis media",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "surveil_member.complication",
    "code": "225",
    "name": "อื่น ๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "surveil_member.complication",
    "code": "226",
    "name": "ไม่ทราบ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "surveil_member.complication",
    "code": "227",
    "name": "Pneumonia and Diarrhoea",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "surveil_member.complication",
    "code": "228",
    "name": "Pneumonia and Encephalitis",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
