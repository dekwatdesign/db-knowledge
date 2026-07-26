# `opitemrece_medplan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| med_plan_number | int(11) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_an_order_no | an | no | 1 |
| ix_an_order_no | order_no | no | 2 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_med_plan_number | med_plan_number | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hos_guid": "{00001073-2A5E-44BE-BE6E-4020838AB79F}",
    "med_plan_number": 0,
    "qty": 0,
    "an": "660001263",
    "order_no": 389933,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00001559-163B-4758-BCE6-05211136C85A}",
    "med_plan_number": 0,
    "qty": 1,
    "an": "570001489",
    "order_no": 69253,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00004002-D9D9-467E-A73C-469FBA589261}",
    "med_plan_number": 0,
    "qty": 1,
    "an": "600000641",
    "order_no": 184272,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{000061C7-A9D7-4004-A90A-03E08A9828CE}",
    "med_plan_number": 0,
    "qty": 1,
    "an": "570001708",
    "order_no": 72812,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00006D71-D24A-483D-A174-1A2A4F54DE3A}",
    "med_plan_number": 0,
    "qty": 1,
    "an": "600000536",
    "order_no": 192102,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{00008A77-77CD-49D0-808D-82988201C4A8}",
    "med_plan_number": 0,
    "qty": 1,
    "an": "680000457",
    "order_no": 459853,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{0000B059-CF2D-4475-8B05-4CE3C052BC82}",
    "med_plan_number": 32024,
    "qty": 1,
    "an": "650001244",
    "order_no": 344231,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{0000CFC0-A11B-499B-AE90-C25B695280DD}",
    "med_plan_number": 0,
    "qty": 1,
    "an": "620000048",
    "order_no": 232323,
    "hos_guid_ext": null
  }
]
```
