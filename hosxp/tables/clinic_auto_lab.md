# `clinic_auto_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic | char(3) | NO | PRI |  |  |  |
| lab_items_code | int(11) | NO | PRI | 0 |  |  |
| form_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| clinic | clinic | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | clinic | yes | 1 |
| PRIMARY | lab_items_code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "clinic": "001",
    "lab_items_code": 0,
    "form_name": "HEMATOLOGY",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
