# `edoc_transport`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_transport_id | int(11) | NO | PRI | 0 |  |  |
| edoc_transport_name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| edoc_transport_name | edoc_transport_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | edoc_transport_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "edoc_transport_id": 1,
    "edoc_transport_name": "นำส่ง",
    "hos_guid": null
  },
  {
    "edoc_transport_id": 2,
    "edoc_transport_name": "จดหมาย",
    "hos_guid": null
  },
  {
    "edoc_transport_id": 3,
    "edoc_transport_name": "จดหมายลงทะเบียน",
    "hos_guid": null
  },
  {
    "edoc_transport_id": 4,
    "edoc_transport_name": "EMS",
    "hos_guid": null
  },
  {
    "edoc_transport_id": 5,
    "edoc_transport_name": "สายการบิน",
    "hos_guid": null
  },
  {
    "edoc_transport_id": 6,
    "edoc_transport_name": "โทรสาร",
    "hos_guid": null
  },
  {
    "edoc_transport_id": 7,
    "edoc_transport_name": "อื่นๆ",
    "hos_guid": null
  }
]
```
