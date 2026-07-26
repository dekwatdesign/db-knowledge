# `psychiatric_estimate_adl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_estimate_adl_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_self_cant_eat | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_self_help_eat | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_self_eat | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_help_teethbrush | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_self_teethbrush | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_self_cant_toilet | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_can_some_toilet | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_self_can_toilet | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_help_bath | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_self_bath | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_help_wear | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_can_half_wear | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_can_wear | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_cant_shit | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_some_can_shit | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_can_shit | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_cant_pee | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_some_can_pee | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_can_pee | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_cant_sit | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_help_sit | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_some_can_sit | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_can_sit | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_cant_move | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_wheelchair_move | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_help_move | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_can_move | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_cant_stair | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_help_stair | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_can_stair | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_date | date | YES |  | NULL |  |  |
| psychiatric_estimate_adl_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_eat | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_eat_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_teethbrush | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_teethbrush_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_toilet | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_toilet_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_bath | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_bath_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_wear | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_wear_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_shit | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_shit_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_pee | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_pee_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_sit | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_sit_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_move | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_move_point | int(11) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_stair | char(1) | YES |  | NULL |  |  |
| psychiatric_estimate_adl_stair_point | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_estimate_adl_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "psychiatric_estimate_adl_id": 2,
    "vn": "571020060000",
    "an": "",
    "psychiatric_estimate_adl_self_cant_eat": null,
    "psychiatric_estimate_adl_self_help_eat": null,
    "psychiatric_estimate_adl_self_eat": null,
    "psychiatric_estimate_adl_help_teethbrush": null,
    "psychiatric_estimate_adl_self_teethbrush": null,
    "psychiatric_estimate_adl_self_cant_toilet": null,
    "psychiatric_estimate_adl_can_some_toilet": null,
    "psychiatric_estimate_adl_self_can_toilet": null,
    "psychiatric_estimate_adl_help_bath": null,
    "psychiatric_estimate_adl_self_bath": null,
    "psychiatric_estimate_adl_help_wear": null,
    "psychiatric_estimate_adl_can_half_wear": null,
    "psychiatric_estimate_adl_can_wear": null,
    "psychiatric_estimate_adl_cant_shit": null,
    "psychiatric_estimate_adl_some_can_shit": null,
    "psychiatric_estimate_adl_can_shit": null,
    "psychiatric_estimate_adl_cant_pee": null,
    "psychiatric_estimate_adl_some_can_pee": null,
    "psychiatric_estimate_adl_can_pee": null,
    "psychiatric_estimate_adl_cant_sit": null,
    "psychiatric_estimate_adl_help_sit": null,
    "psychiatric_estimate_adl_some_can_sit": null,
    "psychiatric_estimate_adl_can_sit": null,
    "psychiatric_estimate_adl_cant_move": null,
    "psychiatric_estimate_adl_wheelchair_move": null,
    "psychiatric_estimate_adl_help_move": null,
    "psychiatric_estimate_adl_can_move": null,
    "psychiatric_estimate_adl_cant_stair": null,
    "psychiatric_estimate_adl_help_stair": null,
    "psychiatric_estimate_adl_can_stair": null,
    "psychiatric_estimate_adl_date": "2014-10-20",
    "psychiatric_estimate_adl_point": null,
    "psychiatric_estimate_adl_eat": "2",
    "psychiatric_estimate_adl_eat_point": 1000,
    "psychiatric_estimate_adl_teethbrush": "1",
    "psychiatric_estimate_adl_teethbrush_point": 1000,
    "psychiatric_estimate_adl_toilet": "2",
    "psychiatric_estimate_adl_toilet_point": 1000,
    "psychiatric_estimate_adl_bath": "1",
    "psychiatric_estimate_adl_bath_point": 1000,
    "psychiatric_estimate_adl_wear": "2",
    "psychiatric_estimate_adl_wear_point": 1000,
    "psychiatric_estimate_adl_shit": "2",
    "psychiatric_estimate_adl_shit_point": 1000,
    "psychiatric_estimate_adl_pee": "2",
    "psychiatric_estimate_adl_pee_point": 1000,
    "psychiatric_estimate_adl_sit": "3",
    "psychiatric_estimate_adl_sit_point": 1000,
    "psychiatric_estimate_adl_move": "3",
    "psychiatric_estimate_adl_move_point": 1000,
    "psychiatric_estimate_adl_stair": "2",
    "psychiatric_estimate_adl_stair_point": 1000,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_adl_id": 3,
    "vn": "571021060000",
    "an": "",
    "psychiatric_estimate_adl_self_cant_eat": null,
    "psychiatric_estimate_adl_self_help_eat": null,
    "psychiatric_estimate_adl_self_eat": null,
    "psychiatric_estimate_adl_help_teethbrush": null,
    "psychiatric_estimate_adl_self_teethbrush": null,
    "psychiatric_estimate_adl_self_cant_toilet": null,
    "psychiatric_estimate_adl_can_some_toilet": null,
    "psychiatric_estimate_adl_self_can_toilet": null,
    "psychiatric_estimate_adl_help_bath": null,
    "psychiatric_estimate_adl_self_bath": null,
    "psychiatric_estimate_adl_help_wear": null,
    "psychiatric_estimate_adl_can_half_wear": null,
    "psychiatric_estimate_adl_can_wear": null,
    "psychiatric_estimate_adl_cant_shit": null,
    "psychiatric_estimate_adl_some_can_shit": null,
    "psychiatric_estimate_adl_can_shit": null,
    "psychiatric_estimate_adl_cant_pee": null,
    "psychiatric_estimate_adl_some_can_pee": null,
    "psychiatric_estimate_adl_can_pee": null,
    "psychiatric_estimate_adl_cant_sit": null,
    "psychiatric_estimate_adl_help_sit": null,
    "psychiatric_estimate_adl_some_can_sit": null,
    "psychiatric_estimate_adl_can_sit": null,
    "psychiatric_estimate_adl_cant_move": null,
    "psychiatric_estimate_adl_wheelchair_move": null,
    "psychiatric_estimate_adl_help_move": null,
    "psychiatric_estimate_adl_can_move": null,
    "psychiatric_estimate_adl_cant_stair": null,
    "psychiatric_estimate_adl_help_stair": null,
    "psychiatric_estimate_adl_can_stair": null,
    "psychiatric_estimate_adl_date": "2014-10-21",
    "psychiatric_estimate_adl_point": null,
    "psychiatric_estimate_adl_eat": "2",
    "psychiatric_estimate_adl_eat_point": 99999999,
    "psychiatric_estimate_adl_teethbrush": "1",
    "psychiatric_estimate_adl_teethbrush_point": 999999,
    "psychiatric_estimate_adl_toilet": "2",
    "psychiatric_estimate_adl_toilet_point": 999999,
    "psychiatric_estimate_adl_bath": "1",
    "psychiatric_estimate_adl_bath_point": 9999999,
    "psychiatric_estimate_adl_wear": "2",
    "psychiatric_estimate_adl_wear_point": 9999999,
    "psychiatric_estimate_adl_shit": "2",
    "psychiatric_estimate_adl_shit_point": 9999999,
    "psychiatric_estimate_adl_pee": "2",
    "psychiatric_estimate_adl_pee_point": 999999,
    "psychiatric_estimate_adl_sit": "3",
    "psychiatric_estimate_adl_sit_point": 9999999,
    "psychiatric_estimate_adl_move": "3",
    "psychiatric_estimate_adl_move_point": 9999999,
    "psychiatric_estimate_adl_stair": "2",
    "psychiatric_estimate_adl_stair_point": 99999999,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_adl_id": 4,
    "vn": "571022083059",
    "an": "",
    "psychiatric_estimate_adl_self_cant_eat": null,
    "psychiatric_estimate_adl_self_help_eat": null,
    "psychiatric_estimate_adl_self_eat": null,
    "psychiatric_estimate_adl_help_teethbrush": null,
    "psychiatric_estimate_adl_self_teethbrush": null,
    "psychiatric_estimate_adl_self_cant_toilet": null,
    "psychiatric_estimate_adl_can_some_toilet": null,
    "psychiatric_estimate_adl_self_can_toilet": null,
    "psychiatric_estimate_adl_help_bath": null,
    "psychiatric_estimate_adl_self_bath": null,
    "psychiatric_estimate_adl_help_wear": null,
    "psychiatric_estimate_adl_can_half_wear": null,
    "psychiatric_estimate_adl_can_wear": null,
    "psychiatric_estimate_adl_cant_shit": null,
    "psychiatric_estimate_adl_some_can_shit": null,
    "psychiatric_estimate_adl_can_shit": null,
    "psychiatric_estimate_adl_cant_pee": null,
    "psychiatric_estimate_adl_some_can_pee": null,
    "psychiatric_estimate_adl_can_pee": null,
    "psychiatric_estimate_adl_cant_sit": null,
    "psychiatric_estimate_adl_help_sit": null,
    "psychiatric_estimate_adl_some_can_sit": null,
    "psychiatric_estimate_adl_can_sit": null,
    "psychiatric_estimate_adl_cant_move": null,
    "psychiatric_estimate_adl_wheelchair_move": null,
    "psychiatric_estimate_adl_help_move": null,
    "psychiatric_estimate_adl_can_move": null,
    "psychiatric_estimate_adl_cant_stair": null,
    "psychiatric_estimate_adl_help_stair": null,
    "psychiatric_estimate_adl_can_stair": null,
    "psychiatric_estimate_adl_date": "2014-10-22",
    "psychiatric_estimate_adl_point": null,
    "psychiatric_estimate_adl_eat": "2",
    "psychiatric_estimate_adl_eat_point": null,
    "psychiatric_estimate_adl_teethbrush": "1",
    "psychiatric_estimate_adl_teethbrush_point": null,
    "psychiatric_estimate_adl_toilet": "2",
    "psychiatric_estimate_adl_toilet_point": null,
    "psychiatric_estimate_adl_bath": "1",
    "psychiatric_estimate_adl_bath_point": null,
    "psychiatric_estimate_adl_wear": "2",
    "psychiatric_estimate_adl_wear_point": null,
    "psychiatric_estimate_adl_shit": "2",
    "psychiatric_estimate_adl_shit_point": null,
    "psychiatric_estimate_adl_pee": "2",
    "psychiatric_estimate_adl_pee_point": null,
    "psychiatric_estimate_adl_sit": "3",
    "psychiatric_estimate_adl_sit_point": null,
    "psychiatric_estimate_adl_move": "3",
    "psychiatric_estimate_adl_move_point": null,
    "psychiatric_estimate_adl_stair": null,
    "psychiatric_estimate_adl_stair_point": null,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_adl_id": 7,
    "vn": "571024060000",
    "an": "",
    "psychiatric_estimate_adl_self_cant_eat": null,
    "psychiatric_estimate_adl_self_help_eat": null,
    "psychiatric_estimate_adl_self_eat": null,
    "psychiatric_estimate_adl_help_teethbrush": null,
    "psychiatric_estimate_adl_self_teethbrush": null,
    "psychiatric_estimate_adl_self_cant_toilet": null,
    "psychiatric_estimate_adl_can_some_toilet": null,
    "psychiatric_estimate_adl_self_can_toilet": null,
    "psychiatric_estimate_adl_help_bath": null,
    "psychiatric_estimate_adl_self_bath": null,
    "psychiatric_estimate_adl_help_wear": null,
    "psychiatric_estimate_adl_can_half_wear": null,
    "psychiatric_estimate_adl_can_wear": null,
    "psychiatric_estimate_adl_cant_shit": null,
    "psychiatric_estimate_adl_some_can_shit": null,
    "psychiatric_estimate_adl_can_shit": null,
    "psychiatric_estimate_adl_cant_pee": null,
    "psychiatric_estimate_adl_some_can_pee": null,
    "psychiatric_estimate_adl_can_pee": null,
    "psychiatric_estimate_adl_cant_sit": null,
    "psychiatric_estimate_adl_help_sit": null,
    "psychiatric_estimate_adl_some_can_sit": null,
    "psychiatric_estimate_adl_can_sit": null,
    "psychiatric_estimate_adl_cant_move": null,
    "psychiatric_estimate_adl_wheelchair_move": null,
    "psychiatric_estimate_adl_help_move": null,
    "psychiatric_estimate_adl_can_move": null,
    "psychiatric_estimate_adl_cant_stair": null,
    "psychiatric_estimate_adl_help_stair": null,
    "psychiatric_estimate_adl_can_stair": null,
    "psychiatric_estimate_adl_date": "2014-10-24",
    "psychiatric_estimate_adl_point": null,
    "psychiatric_estimate_adl_eat": "2",
    "psychiatric_estimate_adl_eat_point": null,
    "psychiatric_estimate_adl_teethbrush": "1",
    "psychiatric_estimate_adl_teethbrush_point": null,
    "psychiatric_estimate_adl_toilet": "2",
    "psychiatric_estimate_adl_toilet_point": null,
    "psychiatric_estimate_adl_bath": "1",
    "psychiatric_estimate_adl_bath_point": null,
    "psychiatric_estimate_adl_wear": "2",
    "psychiatric_estimate_adl_wear_point": null,
    "psychiatric_estimate_adl_shit": "2",
    "psychiatric_estimate_adl_shit_point": null,
    "psychiatric_estimate_adl_pee": "2",
    "psychiatric_estimate_adl_pee_point": null,
    "psychiatric_estimate_adl_sit": "3",
    "psychiatric_estimate_adl_sit_point": null,
    "psychiatric_estimate_adl_move": "3",
    "psychiatric_estimate_adl_move_point": null,
    "psychiatric_estimate_adl_stair": "2",
    "psychiatric_estimate_adl_stair_point": null,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_adl_id": 8,
    "vn": "571029060000",
    "an": "",
    "psychiatric_estimate_adl_self_cant_eat": null,
    "psychiatric_estimate_adl_self_help_eat": null,
    "psychiatric_estimate_adl_self_eat": null,
    "psychiatric_estimate_adl_help_teethbrush": null,
    "psychiatric_estimate_adl_self_teethbrush": null,
    "psychiatric_estimate_adl_self_cant_toilet": null,
    "psychiatric_estimate_adl_can_some_toilet": null,
    "psychiatric_estimate_adl_self_can_toilet": null,
    "psychiatric_estimate_adl_help_bath": null,
    "psychiatric_estimate_adl_self_bath": null,
    "psychiatric_estimate_adl_help_wear": null,
    "psychiatric_estimate_adl_can_half_wear": null,
    "psychiatric_estimate_adl_can_wear": null,
    "psychiatric_estimate_adl_cant_shit": null,
    "psychiatric_estimate_adl_some_can_shit": null,
    "psychiatric_estimate_adl_can_shit": null,
    "psychiatric_estimate_adl_cant_pee": null,
    "psychiatric_estimate_adl_some_can_pee": null,
    "psychiatric_estimate_adl_can_pee": null,
    "psychiatric_estimate_adl_cant_sit": null,
    "psychiatric_estimate_adl_help_sit": null,
    "psychiatric_estimate_adl_some_can_sit": null,
    "psychiatric_estimate_adl_can_sit": null,
    "psychiatric_estimate_adl_cant_move": null,
    "psychiatric_estimate_adl_wheelchair_move": null,
    "psychiatric_estimate_adl_help_move": null,
    "psychiatric_estimate_adl_can_move": null,
    "psychiatric_estimate_adl_cant_stair": null,
    "psychiatric_estimate_adl_help_stair": null,
    "psychiatric_estimate_adl_can_stair": null,
    "psychiatric_estimate_adl_date": "2014-10-29",
    "psychiatric_estimate_adl_point": null,
    "psychiatric_estimate_adl_eat": "2",
    "psychiatric_estimate_adl_eat_point": null,
    "psychiatric_estimate_adl_teethbrush": "1",
    "psychiatric_estimate_adl_teethbrush_point": null,
    "psychiatric_estimate_adl_toilet": "2",
    "psychiatric_estimate_adl_toilet_point": null,
    "psychiatric_estimate_adl_bath": "1",
    "psychiatric_estimate_adl_bath_point": null,
    "psychiatric_estimate_adl_wear": "2",
    "psychiatric_estimate_adl_wear_point": null,
    "psychiatric_estimate_adl_shit": "2",
    "psychiatric_estimate_adl_shit_point": null,
    "psychiatric_estimate_adl_pee": "2",
    "psychiatric_estimate_adl_pee_point": null,
    "psychiatric_estimate_adl_sit": "3",
    "psychiatric_estimate_adl_sit_point": null,
    "psychiatric_estimate_adl_move": "3",
    "psychiatric_estimate_adl_move_point": null,
    "psychiatric_estimate_adl_stair": "2",
    "psychiatric_estimate_adl_stair_point": null,
    "hos_guid": null
  },
  {
    "psychiatric_estimate_adl_id": 9,
    "vn": "571103060000",
    "an": "",
    "psychiatric_estimate_adl_self_cant_eat": null,
    "psychiatric_estimate_adl_self_help_eat": null,
    "psychiatric_estimate_adl_self_eat": null,
    "psychiatric_estimate_adl_help_teethbrush": null,
    "psychiatric_estimate_adl_self_teethbrush": null,
    "psychiatric_estimate_adl_self_cant_toilet": null,
    "psychiatric_estimate_adl_can_some_toilet": null,
    "psychiatric_estimate_adl_self_can_toilet": null,
    "psychiatric_estimate_adl_help_bath": null,
    "psychiatric_estimate_adl_self_bath": null,
    "psychiatric_estimate_adl_help_wear": null,
    "psychiatric_estimate_adl_can_half_wear": null,
    "psychiatric_estimate_adl_can_wear": null,
    "psychiatric_estimate_adl_cant_shit": null,
    "psychiatric_estimate_adl_some_can_shit": null,
    "psychiatric_estimate_adl_can_shit": null,
    "psychiatric_estimate_adl_cant_pee": null,
    "psychiatric_estimate_adl_some_can_pee": null,
    "psychiatric_estimate_adl_can_pee": null,
    "psychiatric_estimate_adl_cant_sit": null,
    "psychiatric_estimate_adl_help_sit": null,
    "psychiatric_estimate_adl_some_can_sit": null,
    "psychiatric_estimate_adl_can_sit": null,
    "psychiatric_estimate_adl_cant_move": null,
    "psychiatric_estimate_adl_wheelchair_move": null,
    "psychiatric_estimate_adl_help_move": null,
    "psychiatric_estimate_adl_can_move": null,
    "psychiatric_estimate_adl_cant_stair": null,
    "psychiatric_estimate_adl_help_stair": null,
    "psychiatric_estimate_adl_can_stair": null,
    "psychiatric_estimate_adl_date": "2014-11-03",
    "psychiatric_estimate_adl_point": null,
    "psychiatric_estimate_adl_eat": "2",
    "psychiatric_estimate_adl_eat_point": null,
    "psychiatric_estimate_adl_teethbrush": "1",
    "psychiatric_estimate_adl_teethbrush_point": null,
    "psychiatric_estimate_adl_toilet": "2",
    "psychiatric_estimate_adl_toilet_point": null,
    "psychiatric_estimate_adl_bath": "1",
    "psychiatric_estimate_adl_bath_point": null,
    "psychiatric_estimate_adl_wear": "2",
    "psychiatric_estimate_adl_wear_point": null,
    "psychiatric_estimate_adl_shit": "2",
    "psychiatric_estimate_adl_shit_point": null,
    "psychiatric_estimate_adl_pee": "2",
    "psychiatric_estimate_adl_pee_point": null,
    "psychiatric_estimate_adl_sit": "3",
    "psychiatric_estimate_adl_sit_point": null,
    "psychiatric_estimate_adl_move": "3",
    "psychiatric_estimate_adl_move_point": null,
    "psychiatric_estimate_adl_stair": "2",
    "psychiatric_estimate_adl_stair_point": null,
    "hos_guid": null
  }
]
```
