# `cardtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cardtype | char(2) | NO | PRI |  |  |  |
| editmask | varchar(50) | YES |  | NULL |  |  |
| name | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| need_expire_date | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | cardtype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "cardtype": "01",
    "editmask": "!0-0000-00000-00-0;1;#",
    "name": "ประจำตัวประชาชน",
    "hos_guid": null,
    "hos_guid_ext": null,
    "need_expire_date": null
  },
  {
    "cardtype": "02",
    "editmask": null,
    "name": "หนังสือเดินทาง (Passport)",
    "hos_guid": null,
    "hos_guid_ext": null,
    "need_expire_date": "Y"
  }
]
```
