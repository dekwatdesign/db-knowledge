# `dbdxtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID_DXTYPE | varchar(2) | NO | PRI |  |  |  |
| D_DXTYPE | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | ID_DXTYPE | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ID_DXTYPE": "01",
    "D_DXTYPE": "Principle DX",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ID_DXTYPE": "02",
    "D_DXTYPE": "Co-morbidity",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ID_DXTYPE": "03",
    "D_DXTYPE": "Complication",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ID_DXTYPE": "04",
    "D_DXTYPE": "Others",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ID_DXTYPE": "05",
    "D_DXTYPE": "PROCEDURE",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
