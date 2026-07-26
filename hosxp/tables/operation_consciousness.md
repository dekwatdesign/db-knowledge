# `operation_consciousness`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_consciousness_id | int(11) | NO | PRI | 0 |  |  |
| operation_consciousness_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_consciousness_name | operation_consciousness_name | yes | 1 |
| PRIMARY | operation_consciousness_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "operation_consciousness_id": 1,
    "operation_consciousness_name": "รู้สึกตัวดี",
    "hos_guid": "{44907DF6-F61C-11DE-BFF4-00215E472B30}",
    "score": null
  },
  {
    "operation_consciousness_id": 2,
    "operation_consciousness_name": "ซึม",
    "hos_guid": "{44907FFE-F61C-11DE-BFF4-00215E472B30}",
    "score": null
  },
  {
    "operation_consciousness_id": 3,
    "operation_consciousness_name": "สับสน โวยวาย",
    "hos_guid": "{449080F8-F61C-11DE-BFF4-00215E472B30}",
    "score": null
  },
  {
    "operation_consciousness_id": 4,
    "operation_consciousness_name": "ไม่รู้สึกตัว",
    "hos_guid": "{449081E8-F61C-11DE-BFF4-00215E472B30}",
    "score": null
  }
]
```
