import 'package:stagexl/stagexl.dart';
import 'package:vector_math/vector_math.dart';
import 'lavendar/engine.dart';
import 'lavendar/entities/entity.dart';
import 'lavendar/entities/unit.dart';
import 'lavendar/target.dart';
import 'renderer/renderer.dart';
import 'user_input.dart';

class Game {
  static double deltaTime;
  static Stage stage;
  static Engine engine;
  static Renderer renderer;
  static UserInput userInput;

  Game(_stage) {
    stage = _stage;
  }

  void start() {
    engine = new Engine();
    userInput = new UserInput();
    renderer = new Renderer();
    engine.entityCreated.stream.listen((e) => entityCreated(e));

    stage.onEnterFrame.listen(update);
    stage.onMouseDown.listen(userInput.startDrag);
    stage.onMouseUp.listen(userInput.stopDrag);
    stage.onMouseRightDown.listen(userInput.setMoveTarget);
    stage.onMouseMiddleDown.listen(userInput.setFireTarget);

    engine.createUnit(new Vector2(50, 75), Team.Friendly);
    engine.createUnit(new Vector2(100, 200), Team.Friendly);
    engine.createUnit(new Vector2(200, 50), Team.Friendly);
    engine.createUnit(new Vector2(250, 125), Team.Friendly);
    engine.createUnit(new Vector2(600, 500), Team.Enemy);
    engine.createUnit(new Vector2(500, 400), Team.Enemy);
    engine.createUnit(new Vector2(450, 500), Team.Enemy);
  }

  void update(EnterFrameEvent f) {
    deltaTime = f.passedTime;
    engine.update();

    renderer.renderEntities();
    renderer.renderSelection();
  }

  void entityCreated(Entity e) {
    switch (e.entityType) {
      case EntityType.Unit:
        renderer.addUnit(e);
        break;
      case EntityType.Projectile:
        renderer.addProjectile(e);
        break;
    }
  }

  void submitOrder(Set<Unit> units, Target target, TargetType type) {}
}
