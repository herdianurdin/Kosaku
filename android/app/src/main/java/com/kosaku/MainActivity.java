package com.kosaku;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.view.Window;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  @Override
  protected String getMainComponentName() {
    return "Kosaku";
  }
}
