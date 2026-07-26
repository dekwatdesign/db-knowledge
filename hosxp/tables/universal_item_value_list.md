# `universal_item_value_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| universal_item_value_list_id | int(11) | NO | PRI | 0 |  |  |
| universal_item_id | int(11) | YES | MUL | NULL |  |  |
| universal_item_value_code | varchar(150) | YES |  | NULL |  |  |
| universal_item_value_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | universal_item_id | yes | 1 |
| ix_unique | universal_item_value_code | yes | 2 |
| ix_universal_item_id | universal_item_id | no | 1 |
| PRIMARY | universal_item_value_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "universal_item_value_list_id": 3,
    "universal_item_id": 61,
    "universal_item_value_code": "001",
    "universal_item_value_name": "Alert",
    "hos_guid": "{9DB30E2B-2480-425D-B631-7087ECAF57B3}"
  },
  {
    "universal_item_value_list_id": 4,
    "universal_item_id": 61,
    "universal_item_value_code": "002",
    "universal_item_value_name": "Drowsy",
    "hos_guid": "{03EA8C43-9D58-461A-9782-D804C73C3D54}"
  },
  {
    "universal_item_value_list_id": 5,
    "universal_item_id": 61,
    "universal_item_value_code": "003",
    "universal_item_value_name": "Asleep",
    "hos_guid": "{6FB1904F-3666-4894-8D42-879A9A9A99B1}"
  },
  {
    "universal_item_value_list_id": 6,
    "universal_item_id": 61,
    "universal_item_value_code": "004",
    "universal_item_value_name": "Coma or Unconsciousness",
    "hos_guid": "{FF33FFA7-631B-4851-95FD-D8D6B18D43C1}"
  },
  {
    "universal_item_value_list_id": 7,
    "universal_item_id": 61,
    "universal_item_value_code": "005",
    "universal_item_value_name": "sedated",
    "hos_guid": "{F2035095-1977-4CDD-A117-F7D0A56B77E5}"
  },
  {
    "universal_item_value_list_id": 8,
    "universal_item_id": 61,
    "universal_item_value_code": "006",
    "universal_item_value_name": "Drug",
    "hos_guid": "{72905EB3-29ED-465F-93AD-CECB3E8ED7FF}"
  },
  {
    "universal_item_value_list_id": 9,
    "universal_item_id": 65,
    "universal_item_value_code": "007",
    "universal_item_value_name": "Co-operative",
    "hos_guid": "{588590C0-F33A-4082-9FEC-D5BD7FFF1250}"
  },
  {
    "universal_item_value_list_id": 10,
    "universal_item_id": 65,
    "universal_item_value_code": "008",
    "universal_item_value_name": "Fairly co-operative",
    "hos_guid": "{F06DAB48-1B66-4CF2-B25F-8A4D6D25441E}"
  }
]
```
