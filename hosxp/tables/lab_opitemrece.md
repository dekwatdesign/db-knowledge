# `lab_opitemrece`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| lab_items_group_code | int(11) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| lab_order_number | lab_order_number | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "hos_guid": "{61BF9AB2-E9F3-46F4-83D6-89896C4065AE}",
    "lab_order_number": 0,
    "lab_items_code": 218,
    "lab_items_group_code": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{652408DA-4002-467F-8D77-6D3F86E608B8}",
    "lab_order_number": 2379,
    "lab_items_code": 218,
    "lab_items_group_code": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{9597D7FC-FA0E-4FB5-90C0-04CD65C4BD85}",
    "lab_order_number": 2460,
    "lab_items_code": 96,
    "lab_items_group_code": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{DCDAAC5A-2AF9-4E96-9FE0-2B73F40F77EF}",
    "lab_order_number": 0,
    "lab_items_code": 225,
    "lab_items_group_code": null,
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{F7ED7C7F-5ED1-470C-B34A-7C0DFBF8C090}",
    "lab_order_number": 0,
    "lab_items_code": 96,
    "lab_items_group_code": null,
    "hos_guid_ext": null
  }
]
```
