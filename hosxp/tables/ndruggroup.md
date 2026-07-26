# `ndruggroup`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ngroup | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ngroup_unique | ngroup | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ngroup": "Film X-Ray",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ngroup": "วัสดุการแพทย์ (LAB)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ngroup": "วัสดุการแพทย์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ngroup": "วัสดุงานคอมพิวเตอร์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ngroup": "วัสดุสำนักงาน",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
